# Frontend — ATP MERN Assignment

This folder contains the Vite + React single-page application that consumes the backend APIs.

Overview

- SPA for managing users. Built with React and bundled by Vite.
- Uses `axios` to call the backend API routes mounted under `/api`.

Features

- **User Dashboard / Grid**: View all active users in a beautiful grid layout with premium typography and shadow gradients.
- **Add User Form**: Complete form for registration including client-side validation, error handling, and redirection on success.
- **Soft Delete User**: Immediate soft deletion directly from the grid items, with user confirmation prompts and seamless UI updates.

Tech stack

- React 18, React Router
- Vite for dev server and build
- Axios for HTTP requests

Prerequisites

- Node 16+ / npm

Configuration

- You can set the backend base URL with an environment variable. Create a `.env` in `Frontend` with:
    - `VITE_API_URL` — e.g. `http://localhost:2000/api`

Install & Run

1. Install dependencies:
    - `cd Frontend && npm install`
2. Start dev server:
    - `npm run dev` (default Vite port 5173)
3. Build for production:
    - `npm run build`
4. Preview the production build locally:
    - `npm run preview`

Folder highlights

- `src/` — main React app
- `src/components` — reusable UI components (Navbar, Footer, User)
- `src/pages` — page-level views (Home, AddUser, UserList)

Workflow

- Developer flow: run backend (`Backend`) and frontend dev server (`Frontend`) concurrently, then use the UI to create/list users.
- Production flow: build the frontend (`npm run build`) and serve the `dist` folder with a static host, while running the backend with a production Node process.

Notes

- Ensure `VITE_API_URL` matches the backend host and includes `/api` if your frontend expects the full base path.
- CORS origins are configured in the backend `server.js` (update as needed for deployments).
