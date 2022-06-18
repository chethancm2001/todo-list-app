const express = require("express");
const connectDB = require("./config");
const route = require("./routing.js");
const app = express();

//function to connect db
connectDB();
//express middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", route);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is runing");
});
