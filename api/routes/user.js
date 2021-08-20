const express = require("express");
const user = express.Router();
const userRoute = require("../controllers/users");


user.post("/login", userRoute.userLogin);

module.exports = user;
