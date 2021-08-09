var express = require("express");
var router = express.Router();
const chuck_norris_joke = require("./chuck_norris_joke");


router.get("/", async (req, res, next) => {
  try {
    const joke = await chuck_norris_joke.randomJoke();
    res.json(joke);
  } catch (error) {
    next(error);
  }
});

module.exports = router;