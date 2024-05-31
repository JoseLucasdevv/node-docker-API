require("dotenv").config();
const app = require("./src/app.js");

app.listen(process.env.PORT_APP || 3000, () => {
  console.log("app run on port 3000");
});
