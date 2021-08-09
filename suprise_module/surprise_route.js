var express = require("express");
var router = express.Router();
const suprise=require("./suprise_utils");


router.get("/", async (req, res, next) => {
  try {

    const name = req.query.name;
    const birth_year=req.query.birth_year;
    const data = await suprise.supriesMe(name,birth_year);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;