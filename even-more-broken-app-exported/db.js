const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "Shubh123",
  host: "localhost",
  port: 5432,
  database: "even_more_app"
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};