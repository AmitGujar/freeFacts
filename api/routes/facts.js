const express = require("express");
const factRoute = require("../controllers/facts");
const fact = express.Router();
const checkAuth = require("../middleware/check-auth");

fact.get("/random", factRoute.getRandomFacts);
fact.get("/",factRoute.getAllFacts);
fact.post("/", checkAuth, factRoute.createFacts);

module.exports = fact;