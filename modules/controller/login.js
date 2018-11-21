const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

//To use Promise in Mongoose
mongoose.Promise = Promise;

exports.loginUser = (req, res) => {
  //Use express Validator here
  User.findOne({ email: req.body.email }).then(data => {
    if (!data) {
      return res.send("Error");
    } else {
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (result == true) {
          res.status('2xx').send("Hello welcome!!");
        } else {
            res.status(400).send(info);
        }
      });
    }
  });
};
