const bcrypt = require("bcrypt");
const User = require("../models/userModel");
require("dotenv").config();
const SALT_ROUNDS = +process.env.SALT_ROUNDS;

const registerUser = (req, res) => {
  try {
    console.log("req.body.password", req.body.password);
    bcrypt.hash(req.body.password, SALT_ROUNDS).then((hashedPassword) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Registered Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    });
  } catch (error) {
    res.status(500).send({
      message: "Password was not hashed successfully",
      error,
    });
  }
};

module.exports = registerUser;
