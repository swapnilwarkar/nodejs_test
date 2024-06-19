npm install express mysql2/promise

Create POST: 
curl -X POST http://localhost:PORT/api/users -H "Content-Type: application/json" -d '{"accountId": "user123"}'

Read (GET) All:
curl http://localhost:PORT/api/users

Update (PUT) by ID: 
curl -X PUT http://localhost:PORT/api/users/1 -H "Content-Type: application/json" -d '{"accountId": "updated_user"}'

Delete (DELETE) by ID: 
curl -X DELETE http://localhost:PORT/api/users/1

For Products : 

Create POST: 
curl -X POST http://localhost:PORT/api/products -H "Content-Type: application/json" -d '{"type": "Widget", "version": "1.0"}'

Read (GET) : 
curl http://localhost:PORT/api/products

Update (PUT) :
curl -X PUT http://localhost:PORT/api/products/1 -H "Content-Type: application/json" -d '{"type": "Gadget", "version": "2.0"}'

Delete (DELETE) : 
curl -X DELETE http://localhost:PORT/api/products/1

