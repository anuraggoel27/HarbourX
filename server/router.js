const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const router = express.Router();

const User = require("./schema/userModel");
const Photo = require("./schema/photoModel");

router.post("/user/signup", async (req, res) => {
  try {
    let user = new User(req.body);
    await bcrypt.hash(req.body.password, 7).then((hash) => {
      user.password = hash;
    });
    console.log(user);

    await user.save();
    res.send({ userCreate: true, id: user.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/user/login", async (req, res) => {
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
          id: user.id,
        });
      });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/user/:id/addphoto", async (req, res) => {
  var photo = new Photo({
    user_id: req.params.id,
    link: req.body.link,
    caption: req.body.caption,
    latitute: req.body.latitute,
    longitude: req.body.longitude,
    timeOfCapture: Date.now(),
  });
  await photo.save().then((data) => {
    res.send(data);
  });
});

router.get("/user/:id", (req, res) => {
  try {
    User.findOne({ _id: req.params.id }).then((user) => {
      if (!user) console.log("No such user");
      Photo.find({ user_id: req.params.id }).then((photoz) => {
        var ret = {
          name: user.name,
          home: user.home,
          bio: user.bio,
          hometown: user.home,
          photos: photoz,
        };
        res.send(ret);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", (req, res) => {
  User.find({})
    .limit(10)
    .then((users) => {
      res.send(users);
    });
});

module.exports = router;
