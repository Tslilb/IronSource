var express = require("express");
var router = express.Router();
const kanye_quote = require("./kanye-quote");


router.get("/", async (req, res, next) => {
  try {
    const quote = await kanye_quote.randomQuote();
    res.json(quote);
  } catch (error) {
    next(error);
  }
});

module.exports = router;