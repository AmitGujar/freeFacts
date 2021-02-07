const Fact = require("../models/facts");
const mongoose = require("mongoose");

const getRandomFacts = async (req, res, next) => {
  try {
    const facts = await Fact.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(facts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getAllFacts = async (req, res, next) => {
  try {
    const facts = await Fact.find().select("_id name");
    res.status(200).json({
      count: facts.length,
      All_facts: {
        facts,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createFacts = async (req, res, next) => {
  try {
    const fact = await Fact.find({ name: req.body.name });
    if (fact.length >= 1) {
      return res.status(409).json({
        message: "This fact already exists, add something new",
      });
    } else {
      const fact = new Fact({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
      });
      const savedFact = await fact.save();
      res.status(200).json({
        message: "Fact saved successfully",
        savedFact,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
    error: err
  });
  }
};

module.exports = {
  getRandomFacts,
  getAllFacts,
  createFacts,
};
