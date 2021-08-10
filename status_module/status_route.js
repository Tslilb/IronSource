var express = require("express");
var router = express.Router();
const status=require("./status_utils");


router.get("/stats", (req, res, next) => {
  try {

    const data = status.getInfo();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;