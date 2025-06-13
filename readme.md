# IMF Gadget API

A RESTful API for managing IMF gadgets and agents.

## Live API

The API is deployed and accessible at: [https://imf-gadget-api-mtb5.onrender.com](https://imf-gadget-api-mtb5.onrender.com)

## API Routes

### Authentication Routes

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
| POST   | `/auth/register` | Register a new IMF member    |
| POST   | `/auth/login`    | Login an existing IMF member |

### Gadget Routes

All gadget routes require authentication.

| Method | Endpoint                     | Description                                  |
| ------ | ---------------------------- | -------------------------------------------- |
| GET    | `/gadgets`                   | Get all gadgets                              |
| GET    | `/gadgets/status/:status`    | Get gadgets by status                        |
| POST   | `/gadgets`                   | Create a new gadget                          |
| PATCH  | `/gadgets/:id`               | Update an existing gadget                    |
| DELETE | `/gadgets/:id`               | Delete a gadget                              |
| POST   | `/gadgets/:id/self-destruct` | Initiate self-destruct sequence for a gadget |

## Authentication

All gadget-related endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## Local Development

### Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

### Docker Support

The application can be run using Docker:

```bash
docker build -t imf-gadget-api .
docker run -p 3000:3000 imf-gadget-api
```

## API Testing

You can test the API endpoints using tools like Postman or cURL. Here's an example using cURL:

```bash
# Register a new member
curl -X POST https://imf-gadget-api-mtb5.onrender.com/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "ethan", "password": "hunt123"}'

# Login
curl -X POST https://imf-gadget-api-mtb5.onrender.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "ethan", "password": "hunt123"}'

# Get all gadgets (with authentication)
curl https://imf-gadget-api-mtb5.onrender.com/gadgets \
  -H "Authorization: Bearer <your-token>"
```
