const express = require("express");
const app = express();
const router = express.Router();
const surprise = require("./suprise_module/surprise_route");
const port = process.env.PORT || "80";


const rout = router.get("/", (req, res) => res.send("Welcome to Tslil's app"));
app.use(rout);
app.use("/surprise", surprise)


const server = app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  }
);