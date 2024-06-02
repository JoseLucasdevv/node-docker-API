const db = require("./src/db/db-config.js");
require("dotenv").config();
const app = require("./src/app.js");

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the process with an error code
  }
  const sql = `
  CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age TINYINT UNSIGNED NOT NULL
  )
`;

  db.query(sql, (err) => {
    if (err) {
      console.log("deu pau");
    }
  });
  console.log("db connect");
  app.listen(process.env.PORT_APP, () => {
    console.log(`App running on port ${process.env.PORT_APP}`);
  });
});
