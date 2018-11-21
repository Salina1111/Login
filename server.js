//Import Modules
const express = require("express");
const app = express();
const parser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./routes/route");
const config = require("./modules/config/config");

//Connect to mongoDb
mongoose.connect(config.database,{ useNewUrlParser: true });


mongoose.connection
  .once("open", function() {
    console.log("Connection has been made, now make fireworks!");
  })
  .on("error", function(error) {
    console.log("Connection error:", error);
  });

//body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//For routes
app.use("/api/", route);

// const hostname = "127.0.0.1";
// const port = 3000;

app.listen(3000, "localhost", () => {
  console.log(`Server is running`);
});
