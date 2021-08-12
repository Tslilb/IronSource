var express = require("express");
var router = express.Router();
const suprise=require("./suprise_utils");


router.get("/surprise", async (req, res, next) => {
  try { 
    const name = req.query.name;
    const birth_year=req.query.birth_year;

    if (! (name ) || !(birth_year)) {
      //TODO : should i send diffrent error for name and for birth year ? 
      res.send('name and birth year are required').sendStatus(400)
    }
    
    const data = await suprise.supriesMe(name,birth_year);
    res.json(data).sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;