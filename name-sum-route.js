var express = require("express");
var router = express.Router();
const name_sum = require("./name-sum");


router.get("/", async (req, res, next) => {
  try {
    const sum = await name_sum.nameSum("tslil");
    res.json(sum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;