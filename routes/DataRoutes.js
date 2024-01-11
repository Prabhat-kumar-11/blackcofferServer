const express = require("express");
const DataRouter = express.Router();

const { DataModel } = require("../modal/model");

DataRouter.get("/", async (req, res) => {
  try {
    const Data = await DataModel.find();
    res.status(200).send(Data);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = { DataRouter };
