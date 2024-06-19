#curl -X POST http://localhost:3000/api/createuser \
#  -H "Content-Type: application/json" \
#  -d '{"username": "johndoe", "email": "johndoe@example.com"}'


curl -X POST http://localhost:3000/createuser \
  -H 'Content-Type: application/json' \
  -d '{ "id": 123, "account": { "id": 456 } }'