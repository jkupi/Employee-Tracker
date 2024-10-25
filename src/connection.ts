import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const { Pool } = pg;

// creating connection using .env variables
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  database: process.env.DB_NAME,
  port: 5432,
});

//establish connection to database
const connectToDb = async () => {
  try {
    await pool.connect();
    console.log("Connected to the database.");
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
};

export { pool, connectToDb };
