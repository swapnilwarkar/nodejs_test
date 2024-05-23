//Author : Swapnil Warkar
//Purpose : Testing of simple REST API

const express = require('express');
const data = require('./data'); // Import data module

const app = express();
const port = 3000;

// Middleware to parse incoming request body as JSON
app.use(express.json());

// API endpoint to create a new item (POST request)
app.post('/items', (req, res) => {
    const newItem = req.body;
    data.addItem(newItem);
    res.json(newItem); // Send the newly created item back in the response
});

// API endpoint to get all items (GET request)
app.get('/items', (req, res) => {
    const allItems = data.getItems();
    res.json(allItems);
});

// API endpoint to get an item by ID (GET request)
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const item = data.getItemById(itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// API endpoint to update an item by ID (PUT request)
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const success = data.updateItem(itemId, updatedItem);
    if (success) {
        res.json(updatedItem);
    } else {
        res.status(404).send('Item not found');
    }
});

// API endpoint to delete an item by ID (DELETE request)
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const success = data.deleteItem(itemId);
    if (success) {
        res.sendStatus(200); // No content to send back on successful delete
    } else {
        res.status(404).send('Item not found');
    }
});

// **The missing line was here:**
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

