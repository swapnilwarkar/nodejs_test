const mysql = require('mysql2/promise');

const userPool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'users',
  decimalNumbers: true
});

const productPool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'products',
  decimalNumbers: true
});

const getConnection = async (pool) => {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (err) {
    throw new Error('Error connecting to database');
  }
};

const executeQuery = async (pool, sql, params = []) => {
  const connection = await getConnection(pool);
  try {
    const [results] = await connection.query(sql, params);
    return results;
  } catch (err) {
    throw err;
  } finally {
    connection.release();
  }
};

module.exports = { executeUserQuery: executeQuery.bind(null, userPool), executeProductQuery: executeQuery.bind(null, productPool) };

