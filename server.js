const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("dist"));
app.use(bodyParser.json());

const data = [];

app.post("/submit", (req, res) => {
  const { text } = req.body;
  data.push({ text });
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
