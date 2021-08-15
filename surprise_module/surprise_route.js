var express = require("express");
var router = express.Router();
const suprise = require("./surprise");


router.get("/surprise", async (req, res, next) => {
  try {
    const name = req.query.name;
    const birth_year = req.query.birth_year;

    if (!(name && birth_year)) {
      //TODO : should i send diffrent error for name and for birth year ? 
      res.status(400).send('name and birth year are required')
      
    }
    else{
    const data = await suprise.surpriesMe(name, birth_year);
    res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;