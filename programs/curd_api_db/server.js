const express = require('express');
const userRoutes = require('./userRoutes'); // Import user routes
const productRoutes = require('./productRoutes'); // Import product routes (create one for products)
const db = require('./db'); // Import database connection

const app = express();
const port = process.env.PORT || 5000;

// Connect to user and product databases
Promise.all([db.executeUserQuery('SELECT 1'), db.executeProductQuery('SELECT 1')])
  .then(() => console.log('Connected to databases'))
  .catch((err) => {
    console.error('Error connecting to databases:', err);
    process.exit(1); // Exit on connection error
  });

app.use('/api/users', userRoutes); // Mount user routes under /api/users
app.use('/api/products', productRoutes); // Mount product routes under /api/products (create productRoutes.js)

app.listen(port, () => console.log(`Server listening on port ${port}`));

