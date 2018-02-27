const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Someone requested a page");
  res.send("Welcome to your Raspberry");
});

app.listen(3000, () => {
  console.log("Server listening to port 3000");
});
