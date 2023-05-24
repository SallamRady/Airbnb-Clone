const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

module.exports.signup = (req, res, next) => {
  let { name, email, password } = req.body;

  bcrypt
    .hash(password, 12)
    .then((hassedPw) => {
      let user = new User({ name, email, password: hassedPw });
      return user.save();
    })
    .then((user) => {
      let response = {
        status: "success",
        data: user,
      };
      return res.status(201).json(response);
    })
    .catch((err) => {
      let response = {
        status: "error",
        error: err,
      };
      console.log("error in signup :", err);
      return res.status(500).json(response);
    });
};

module.exports.singin = (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user) {
      let response = {
        status: "error",
        error: "Email or Password is Error.",
      };
      return res.status(400).json(response);
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        let response = {
          status: "error",
          error: "Email or Password is Error.",
        };
        return res.status(400).json(response);
      }
      let token = jwt.sign({ user }, "#SomeSuperSecret@101#", {
        expiresIn: "1h",
      });

      let response = {
        status: "success",
        data: {
          user,
          token,
        },
      };
      return res.status(200).json(response);
    });
  });
};
