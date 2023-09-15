const express = require("express");
const bodyParser = require("body-parser");
const port = 3500;

const app = express();

// parse/application json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("ini get");
});

app.listen(port, () => {
  console.log("server run in port", port);
});
