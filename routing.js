const express = require("express");
const {
  gettodo,
  deletetodo,
  updatetoto,
  posttodo,
} = require("./controller.js");
const route = express.Router();

route.get("/", gettodo);
route.post("/", posttodo);
route.delete("/:id", deletetodo);
route.put("/:id", updatetoto);

module.exports = route;
