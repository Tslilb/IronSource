const express = require("express");
const app = express();
const router = express.Router();
const surprise = require("./suprise_module/surprise_route");
const status= require("./status_module/status_route")
const port = process.env.PORT || "80";


const rout = router.get("/", (req, res) => res.send("Welcome to Tslil's app"));

//Middleware
app.use(rout);
//TODO : can I combine these two ? 
app.use("/api",surprise);
app.use("/api",status);


const server = app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  }
);