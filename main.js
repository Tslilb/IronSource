const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || "80";
const joke = require("./chuck_norris_joke_route");
const qoute = require("./kanye-quote-rout");

const rout = router.get("/", (req, res) => res.send("Welcome to Tslil's app"));
app.use(rout);
app.use("/joke", joke);
app.use("/quote", qoute);

const server = app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });