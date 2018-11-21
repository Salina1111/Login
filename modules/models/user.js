const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


//Defining the Schema
let userSchema = new Schema({
  firstName: { type: String },
  lastName: String,
  email: { type: String },
  username: { type: String },
  password: String,
  Date: { type: Date, default: Date.now }
  // updated_at:{type:Date,  default: Date.now},
  // created_at: {type: Date,default: Date.now},
  // is_deleted: { type: Boolean, default: false  }
});

//To use created schema -> convert schema into Model
let User = mongoose.model("Users", userSchema);

module.exports = User;
