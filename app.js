const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const https = require("https");
const factRoutes = require("./api/routes/facts")
const userRoutes = require("./api/routes/user");
require("dotenv").config();

setInterval(function() {
    https.get("https://freefacts.herokuapp.com/facts");
}, 3000000); // every 5 minutes (300000)

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connection Established....');
});

app.use("/facts", factRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ 
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
