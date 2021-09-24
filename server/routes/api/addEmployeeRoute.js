const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = require("../../db/config");

router.post("/", async (req, res) => {
  const { fullName, age, salary, position, country } = req.body;
  try {
    const insertEmployee = await db.query(
      "INSER INTO employees (name, age, country, position, salary) VALUES(?, ?, ?, ?, ?)",
      [fullName, age, country, position, salary]
    );
    res.status(200).json({
      message: "Employee Succesfully Added",
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Unsuccesful, employee unable to be added", err });
  }
});

module.exports = router;
