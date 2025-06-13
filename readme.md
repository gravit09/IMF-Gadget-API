# IMF Gadget API

A RESTful API for managing IMF gadgets and agents.

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

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

## Docker Support

The application can be run using Docker:

```bash
docker build -t imf-gadget-api .
docker run -p 3000:3000 imf-gadget-api
```
