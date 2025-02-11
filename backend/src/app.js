const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express(); //it creates an server and then we store it in a variable
app.use(cors()); //this is a middleware that allows cross-origin requests

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

module.exports = app;
