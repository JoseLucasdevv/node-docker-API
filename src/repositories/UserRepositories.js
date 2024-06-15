const db = require("../db/db-config");

class UserRepositorie {
  list(callback) {
    const sql = `SELECT * FROM user`;

    db.query(sql, (err, results, fields) => {
      if (err) {
        console.log("query failuire to get user", err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  create({ name, age }) {
    const sql = `INSERT INTO user (name, age) VALUES (?, ?)`;

    // Use parameterized query to safely insert data
    const { results, fields } = db.query(
      sql,
      [name, age],
      (err, results, fields) => {
        if (err) {
          console.error("error executing query: " + err.stack);
          return;
        }
        return { results, fields };
      }
    );
    return { results, fields };
  }

  update(id, { name, age }) {
    const sql = `UPDATE user SET name=?,age=? WHERE id=?`;
    const { results, fields } = db.query(
      sql,
      [name, age, id],
      (err, results, fields) => {
        if (err) {
          console.error("error executing query: " + err.stack);
          return;
        }
        return { results, fields };
      }
    );
    return { results, fields };
  }

  delete(id) {
    const sql = `DELETE FROM user WHERE id=?`;
    const { results, fields } = db.query(sql, [id], (err, results, fields) => {
      if (err) {
        console.error("error executing query: " + err.stack);
        return;
      }
      return { results, fields };
    });
    return { results, fields };
  }
}

module.exports = UserRepositorie;
