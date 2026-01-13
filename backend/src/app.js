const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express(); //it creates an server and then we store it in a variable

// CORS configuration to allow cross-origin requests
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://vila-code-reviewer.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

module.exports = app;
