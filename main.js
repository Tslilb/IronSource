const express = require('express');
const app = express();
const router = express.Router();
const surpriseRoutes = require('./surprise_module/api_routes');
const port = process.env.PORT || "80";

const route = router.get("/", (req, res) => res.send("Welcome to Tslil's app"));
app.use(route);

app.use("/api", surpriseRoutes);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server