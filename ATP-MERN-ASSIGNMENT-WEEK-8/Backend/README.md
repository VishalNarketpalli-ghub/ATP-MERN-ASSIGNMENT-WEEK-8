# Backend — ATP MERN Assignment

This folder contains the Express API and MongoDB models powering the application.

Overview

- RESTful API for user management (create, list, read, update, soft-delete, activate).
- Mount point: `/api` (see `server.js`).

Tech stack

- Node.js (ES module), Express
- MongoDB via Mongoose
- Dev tooling: `nodemon`

Prerequisites

- Node 16+ / npm
- A MongoDB instance (Atlas or local)

Environment

- Create a `.env` file with:
    - `DB_URL` — MongoDB connection string
    - `PORT` — optional (defaults to `2000`)

Install & Run

1. Install dependencies:
    - `cd Backend && npm install`
2. Start development server:
    - `npm run dev` (uses `nodemon`)
3. Start production server:
    - `npm start`

API endpoints (summary)

- `POST /api/users` — create a user
- `GET  /api/users` — list active users
- `GET  /api/users/:id` — get a user by id
- `PUT  /api/users/:id` — update a user by id
- `DELETE /api/users/:id` — soft-delete (sets `status: false`)
- `PATCH /api/users/:id` — activate a user (sets `status: true`)

Model

- User schema is defined in `models/UserModel.js` and includes `email` uniqueness and a `status` flag for soft deletes.

Notes & Production tips

- Validate and secure `DB_URL` in production (use secrets manager or environment injection).
- Consider adding logging, request validation (e.g., `express-validator`), and rate-limiting for production readiness.
