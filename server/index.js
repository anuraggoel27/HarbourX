const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_ADDR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const router = require("./router");
app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});
