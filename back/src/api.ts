import express from "express";
const app = express.Router();

app.get("/config", (req, res) => {
  res.json({
    samples: 43,
    multiplicatorFactor: 12,
  });
});

export default app;
