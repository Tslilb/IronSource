const express = require("express");
const router = express.Router();
const surprise = require("./surprise");

router.get("/stats", (req, res, next) => {
  try {
    const data = surprise.getStats();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/surprise", async (req, res, next) => {
  try {
    const name = req.query.name;
    const birth_year = req.query.birth_year;

    if (name && birth_year) {
      const data = await surprise.surpriesMe(name, birth_year);
      res.status(200).json(data);
    }
    else {
      res.status(400).send('name and birth year are required');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;