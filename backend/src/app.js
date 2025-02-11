const express = require("express");

const app = express(); //it creates an server and then we store it in a variable

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
