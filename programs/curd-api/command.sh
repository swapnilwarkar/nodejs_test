mkdir curd-api && cd curd-api
npm init -y

npm install express
node server.js

Create a new item (POST):
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Item 1", "description": "This is a sample item"}'

Get all items (GET):
curl http://localhost:3000/items

Get an item by ID (GET):
curl http://localhost:3000/items/1  # Replace 1 with the actual ID of an existing item

Update an item by ID (PUT):
curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"name": "Updated Item Name"}'  # Replace 1 with the actual ID and modify the update data

Delete an item by ID (DELETE):
curl -X DELETE http://localhost:3000/items/1  # Replace 1 with the actual ID of an existing item

