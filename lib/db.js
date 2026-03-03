import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

const pool = connectionString
  ? new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  })
  : null;

/**
 * Executes a SQL query using the connection pool.
 * @param {string} text - SQL query string
 * @param {any[]} params - Query parameters
 */
export async function query(text, params) {
  if (!pool) {
    throw new Error("Database not configured (DATABASE_URL missing)");
  }
  return pool.query(text, params);
}

export { pool };
