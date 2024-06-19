const express = require('express');
const router = express.Router();
const db = require('./db'); // Import database connection

// Define SQL queries for CRUD on users table
const INSERT_USER_SQL = 'INSERT INTO users (account_id) VALUES (?)';
const SELECT_ALL_USERS_SQL = 'SELECT * FROM users';
const UPDATE_USER_BY_ID_SQL = 'UPDATE users SET account_id = ? WHERE user_id = ?';
const DELETE_USER_BY_ID_SQL = 'DELETE FROM users WHERE user_id = ?';

// User CRUD routes
router.post('/users', async (req, res) => {
  const { accountId } = req.body;
  try {
    const result = await db.executeUserQuery(INSERT_USER_SQL, [accountId]);
    const userId = result.insertId;
    res.json({ id: userId, accountId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await db.executeUserQuery(SELECT_ALL_USERS_SQL);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving users' }); // Add error handling
  }
});

