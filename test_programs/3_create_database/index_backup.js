import express from 'express';
//import { generateId } from 'generate-id'; // Import specific function from 'generate-id'
import db1 from './db1.js'; // Assuming db1.js is in the same directory

const router = express.Router();

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

router.post('/createuser', createuser);

export default router; // Assuming this is part of a larger Express application
