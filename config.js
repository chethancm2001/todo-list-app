const mongoose = require("mongoose");
require("dotenv").config();
function connectDB() {
  console.log("trying to conndect to db");
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to db");
    })
    .catch(() => {
      console.log("failed to connect to db");
    });
}

module.exports = connectDB;
