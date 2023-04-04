const express = require("express");
const app = express.Router();

app.get("/config", (req, res) => {
  res.json({
    samples: 43,
    multiplicatorFactor: 12,
  });
});

module.exports = app;
