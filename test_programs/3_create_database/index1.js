import express from 'express';
import db1 from './db1.js'; // Assuming db1.js is in the same directory

const app = express();
const port = 3000;

// Middleware to parse incoming request body as JSON
app.use(express.json());

// ... other routes and middleware

async function createuser(req, res, next) {
  try {
    const { id } = req.params;
    const { account: { id: accountId } } = req.user;

    // Assuming getUserById is from db1.js
    const user = await db1.getUserById(id, accountId); // Use the exported function

    if (!user) {
      throw new Error('User not found'); // Better error handling
    }

    // ... rest of your logic using the user data
  } catch (error) {
    next(error); // Pass the error to the error handler middleware
  }
}

app.post('/createuser', createuser); // Corrected route path

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
