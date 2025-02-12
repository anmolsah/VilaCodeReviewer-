require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 9876;
app.listen(9876, () => {
  console.log("server is running on port 9876");
});
