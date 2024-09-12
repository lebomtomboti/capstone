import { createPool } from "mysql2";
import "dotenv/config"

let connection;

try {
  connection = createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    multipleStatements: true,
    connectionLimit: 30
  });
} catch (err) {
  console.error(`Error creating connection pool: ${err}`);
  // Handle the error accordingly
}

export { connection };