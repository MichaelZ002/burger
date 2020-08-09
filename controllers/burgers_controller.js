const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) =>
  burger.insertOne(["burger_name"], [req.body.burger_name], (result) =>
    res.json({ id: result.insertId })
  )
);

router.put("/api/burgers/:id", (req, res) => {
  const idString = `id = ${req.params.id}`;
  burger.updateOne(idString, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;