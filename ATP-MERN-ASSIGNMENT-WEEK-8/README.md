# ATP MERN Assignment — Week 8

Brief, production-ready README for the ATP MERN assignment project. This repository contains a small MERN (MongoDB, Express, React, Node) application with separate Backend and Frontend folders.

**Project:** ATP-MERN-ASSIGNMENT-WEEK-8

**Description:**

- A simple user management app demonstrating a full-stack MERN setup. Users can be created, listed, and viewed. The backend exposes RESTful APIs and persists data in MongoDB. The frontend is a Vite + React SPA that consumes the APIs.

**Key Features:**

- Create, read, and list users
- Clear project structure with separate Backend and Frontend
- Easy local development and production build scripts

**Tech stack:**

- Backend: Node.js, Express, Mongoose, MongoDB
- Frontend: React, Vite, Axios

**Quick start (development):**

1. Install backend deps and start server
    - See [Backend/README.md](Backend/README.md) for details
2. Install frontend deps and start dev server
    - See [Frontend/README.md](Frontend/README.md) for details

**Project structure (top-level):**

- Backend/ — Express API, models, and server
- Frontend/ — Vite + React application

**Notes:**

- Keep environment variables (DB URI, PORT) in `.env` files per folder.
- For production, build the frontend (`npm run build`) and serve statically or deploy separately.

If you need deployment help or CI/CD guidance, open an issue or ask for next steps.
