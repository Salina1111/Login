const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

//To use Promise in Mongoose
mongoose.Promise = Promise;

exports.loginUser = (req, res) => {
  User.findOne({email: req.body.email})
   .exec()
   .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
              code: 401,
              status: "failed",
               message: 'Unauthorized Access'
            });
         }
         if(result) {
            return res.status(200).json({
              code:200,
              status:"success",
               "message": 'Welcome to the JWT Auth'
            });
         }
         return res.status(401).json({
           code: 401,
           status: "failed",
            message: 'Unauthorized Access'
         });
      });
   })
   .catch(error => {
      res.status(500).json({
        code:500,
        status:"Error",
         message: "Internal Server Error"
      });
   });;
};


 //Use express Validator here
  // User.findOne({ email: req.body.email }).then(data => {
  //   if (!data) {
  //     return res.status(400).json({
  //           code: 500,
  //           status : 'Error',
  //           message: "Username or password is incorrect!!",
  //           //errmsg: err.toString()
  //         });
  //   } else {
  //     bcrypt.compare(req.body.password, data.password, (err, result) => {
  //       if (result == true) {
  //         res.status(200).json({
  //           code: 500,
  //           status : 'Success',
  //           message: "Welcome to our World!!",
  //           //errmsg: err.toString()
  //         });
  //       } else {
  //           res.status(400).json({
  //             code: 400,
  //             status : 'Error',
  //             message: "Incorrect Password!!",
  //             //errmsg: err.toString()
  //           });
  //       }
  //     });
  //   }
  // });
