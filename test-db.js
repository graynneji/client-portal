// test-db.js — run with: node test-db.js
require("dotenv").config();
const { Pool } = require("pg");

console.log(
  "Using connection string:",
  process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":****@"),
);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool
  .query("SELECT NOW()")
  .then((res) => {
    console.log("Connected fine:", res.rows[0]);
    return pool.end();
  })
  .catch((err) => {
    console.error("Direct connection failed:", err);
  });
