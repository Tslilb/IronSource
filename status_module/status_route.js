var express = require("express");
var router = express.Router();
const status = require("../surprise_module/surprise");


router.get("/stats", (req, res, next) => {
  try {

    const data = status.getStats();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;