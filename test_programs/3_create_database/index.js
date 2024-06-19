import express from 'express';
import bodyParser from 'body-parser';
import db1 from './db1.js'; // Assuming db1.js is in the same directory


const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// Configure body parser to handle POST request data
app.use(bodyParser.json());

// **POST API to create a new user**
app.post('/users', async (req, res) => {
  const { userId, accountId, title } = req.body;

  // Validate data (optional)
  if (!userId || !accountId || !title) {
    return res.status(400).send('Missing required fields: userId, accountId, title');
  }

  try {
    const sql = 'INSERT INTO users (userId, accountId, title) VALUES (?, ?, ?)';
    const params = [userId, accountId, title];
    await db1.executeQuery(sql, params);
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal server error');
  }
});

// **GET API to retrieve a user by userId**
app.get('/users/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const sql = 'SELECT * FROM users WHERE userId = ?';
    const params = [userId];
    const user = await db1.executeQuery(sql, params);

    if (user.length === 0) {
      return res.status(404).send('User not found');
    }

    res.json(user[0]); // Send the first user object (assuming unique userId)
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Example usage (for local testing)
(async () => {
  // Create a user (assuming POST API call)
  const newUserResponse = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: '123', accountId: '456', title: 'New User' }),
  });
  const newUser = await newUserResponse.json();
  console.log('Created User:', newUser);

  // Get the created user (assuming GET API call)
  const userResponse = await fetch(`http://localhost:3000/users/${newUser.userId}`);
  const user = await userResponse.json();
  console.log('Fetched User:', user);
})();
