const express = require("express");

const { WELCOME } = require("./constants.js");
const city = require("./routes/city.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", city);

app.get("/", (req, res) => {
  res.json(WELCOME);
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
