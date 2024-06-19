// Assuming you're using mysql2 (replace with your library)
import mysql from 'mysql2/promise';

// Replace with your actual database connection details
const poolConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'db1',
    dateStrings: true,
    charset: 'utf8mb4',
    // Add port configuration if using a non-standard port
    port: 3306 // Replace with your actual port number if needed
  };

// Create a connection pool
const pool = mysql.createPool(poolConfig); // Removed redundant .promise()

// Helper function to execute a query
async function executeQuery(sql, params = []) {
  try {
    const [results] = await pool.query(sql, params);
    return results;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
}

// Example usage (replace with your specific queries)
async function getUserById(userId) {
  const sql = 'SELECT * FROM users WHERE userId = ?';
  const results = await executeQuery(sql, [userId]);
  return results[0]; // Assuming you expect a single user by ID
}

export default { // Use default export for ES modules
  executeQuery,
  getUserById,
};
