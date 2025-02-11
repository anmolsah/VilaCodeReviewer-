const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express(); //it creates an server and then we store it in a variable

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

module.exports = app;
