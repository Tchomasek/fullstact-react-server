const express = require("express");
const router = express.Router();
const { Completions } = require("../models");

router.get("/", async (req, res) => {
  const listOfCompletions = await Completions.findAll();
  res.json(listOfCompletions);
});

router.get("/:day", async (req, res) => {
  const day = req.params.day;
  const listOfCompletions = await Completions.findAll({ where: { date: day } });
  res.json(listOfCompletions);
});

router.post("/", async (req, res) => {
  const completion = req.body;
  await Completions.create(completion);
  res.json(completion);
});

router.delete("/:activity/:day", async (req, res) => {
  const activity = req.params.activity;
  const day = req.params.day;
  console.log("activity, day", activity, day);

  await Completions.destroy({
    where: {
      activity: activity,
      date: day,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
