const express = require("express");
const factRoute = require("../controllers/facts");
const fact = express.Router();

fact.get("/random", factRoute.getRandomFacts);
fact.get("/", factRoute.getAllFacts);
fact.post("/", factRoute.createFacts);

module.exports = fact;