const db = require("../db");

class User {
  static async getAll() {
    const result = await db.query("SELECT * FROM users");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }
}

module.exports = User;