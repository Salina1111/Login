const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const SALT_VAl = 10;

//To use Promise in Mongoose
mongoose.Promise = Promise;

exports.registerUser = async (req, res) => {

    // let passwordHash = await bcrypt.hash(req.body.password, SALT_VAl);
    // console.log('password => ', passwordHash);
    // bcrypt.hash(req.body.password, SALT_VAl, (err, hash) => {
    //     console.error('Error => ', err.stack);
    //     console.log('password => ', hash);
    // });
  //Use express Validator here
  bcrypt.hash(req.body.password, SALT_VAl, (error, hash) => {
      if (error) {
          return console.error(error.stack);
      }
    //Inserting data into the collection
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hash,
      Date: req.body.Date

      // created_at: req.body.created_at,
      // is_deleted: req.body.is_deleted
    })
      .then(data => {
        res.status(201).json({ message: "Your data is posted" });
      })
      .catch(err => {
        return res.status(417).json({ message: "Please fillup form properly.Thankyou!" });
      });
  });
};
