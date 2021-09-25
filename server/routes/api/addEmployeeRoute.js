const express = require("express");
const router = express.Router();
const connection = require("../../db/dbConfig");

router.post("/", async (req, res) => {
  const { fullName, age, salary, position, country } = req.body;

  const sql =
    "INSERT INTO employees (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)";
  const data = [fullName, age, country, position, salary];

  connection.query(sql, data, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
