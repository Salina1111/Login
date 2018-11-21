const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

//To use Promise in Mongoose
mongoose.Promise = Promise;

exports.loginUser = (req, res) => {
  //Use express Validator here
  User.findOne({ email: req.body.email }).then(data => {
    if (!data) {
      return res.status(400).json({
            code: 500,
            status : 'Error',
            message: "Username or password is incorrect!!",
            //errmsg: err.toString()
          });
    } else {
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (result == true) {
          res.status(200).json({
            code: 500,
            status : 'Success',
            message: "Welcome to our World!!",
            //errmsg: err.toString()
          });
        } else {
            res.status(400).json({
              code: 400,
              status : 'Error',
              message: "Incorrect Password!!",
              //errmsg: err.toString()
            });
        }
      });
    }
  });
};
