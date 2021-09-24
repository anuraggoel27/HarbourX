const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const router = express.Router();

const User = require("./schema/userModel");

router.post("/users/signup", async (req, res) => {
  try {
    let user = new User(req.body);
    await bcrypt.hash(req.body.password, 7).then((hash) => {
      user.password = hash;
    });
    console.log(user);

    await user.save();
    res.send({ userCreate: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/users/login", async (req, res) => {
  const args = req.body;
  try {
    var data = {};
    await User.findOne({ email: args.email }).then((user) => {
      if (!user)
        res.send({
          isRegistered: false,
          isPassCorrect: false,
          token: null,
        });
      bcrypt.compare(args.password, user.password).then((isValid) => {
        if (!isValid)
          res.send({
            isRegistered: true,
            isPassCorrect: false,
            token: null,
          });
        var tokenGenerated = jwt.sign(
          { username: user.username },
          process.env.SECRET,
          { expiresIn: "1y" }
        );
        res.send({
          isRegistered: true,
          isPassCorrect: true,
          token: tokenGenerated,
        });
      });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
