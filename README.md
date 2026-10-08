# Outlab – Full Stack Authentication Lab

Outlab is a personal development laboratory for practising concepts from the TripleTen Full Stack Web Development bootcamp. It combines a React interface with a separate Express and MongoDB API, with a current learning focus on authentication and authorization.

The current implementation includes authentication screens and client-side route guards. Login, registration requests and token-based sessions are future work. This is a learning project, not a commercial or production-ready application.

## Overview

The repository provides a space to build small features, investigate application behaviour and practise separating UI, routing and data responsibilities. The frontend and backend run independently; the React application does not yet call the Express API.

## Tech Stack

| Area | Implemented technologies |
| --- | --- |
| Frontend | JavaScript, JSX, React, the `useState` Hook, React Router, HTML and CSS |
| Frontend tooling | Vite and its React plugin |
| Backend | Node.js, Express, routing, a controller and asynchronous handlers using Promises and `async/await` |
| Database | MongoDB and Mongoose, with a user schema and create, read and update operations |
| Development tooling | npm, package lockfiles and nodemon for backend restart-on-change |

JWT handling, `localStorage` persistence, frontend Fetch requests and automated tests are not implemented in this version. There is no ESLint configuration or lint script in the repository.

## Features

**Frontend**

- Login and registration interfaces with labelled form fields and navigation links.
- Routes for `/login`, `/register`, `/feed` and `/profile`.
- A reusable `ProtectedRoute` wrapper for the feed and profile routes.
- A fallback redirect based on an authentication-state boolean.
- Feed and profile placeholders, shared navigation and CSS styling.

**Backend**

- MongoDB connection through Mongoose.
- A user model with required `name` and `email` fields and an optional numeric `age`.
- A separate user router and creation controller.
- Email-format validation during user creation and schema validation during updates.
- HTTP responses for creation, invalid input, missing users and server errors, with handling that still needs to be made consistent.

| Method | Endpoint | Current behaviour |
| --- | --- | --- |
| `GET` | `/users` | List users |
| `POST` | `/users` | Create a user from `name`, `email` and optional `age` |
| `GET` | `/users/:id` | Retrieve a user by MongoDB ID |
| `PATCH` | `/users/:id` | Update a user's `name`, `email` and `age` |

These endpoints have no authentication or authorization checks. The user model has no password field, and creating a user does not create login credentials. Use synthetic data and keep the API restricted to a local development environment.

## Project Structure

The main application files are organised as follows. Dependency lockfiles, static assets and unrelated local cache artifacts are omitted from this simplified view.

```text
auth-lab/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   └── ProtectedRoute/
│   │   ├── pages/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Feed/
│   │   │   └── Profile/
│   │   ├── styles/global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/controllers.js
│   │   ├── models/User.js
│   │   ├── routes/Users.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

The backend directory also contains a leftover Vite starter interface, separate from the Express entry point.

## Authentication Flow

1. `BrowserRouter` provides client-side routing. `App` initialises the authentication-state boolean to `false`.
2. `/login` and `/register` render public forms. Their submit handlers currently call only `preventDefault()`; they do not send requests or update authentication state.
3. `/feed` and `/profile` are wrapped in `ProtectedRoute`. A false authentication state redirects the visitor to `/login`; a true state would render the wrapped page.
4. Unmatched paths, including `/`, redirect to `/login` or `/feed` according to that same state.

There is currently no implemented path that changes the state to logged in, so the protected pages remain inaccessible through the normal application flow. Refreshing the application starts again with a false state.

No JWT is issued, stored or verified. There is no `localStorage` integration, session restoration or functional logout handler. The profile contains fictional placeholder data. Frontend route guards control navigation only; server-side access control must be implemented separately.

## Getting Started

### Prerequisites

- Node.js **22.12 or later within the 22.x release line**, satisfying the engine requirements recorded in the dependency lockfiles.
- npm.
- MongoDB running locally if you want to use the backend.

There is no root `package.json`. Install dependencies separately in each application directory.

### Frontend

From the repository root:

```sh
cd frontend
npm ci
npm run dev
```

The development script runs `vite --open`. Use the address shown in the terminal. The frontend can run without the backend.

To build and preview the frontend:

```sh
npm run build
npm run preview
```

### Backend

Start a local MongoDB instance, then open another terminal at the repository root:

```sh
cd backend
npm ci
npm run dev
```

The backend's `dev` script runs `node src/index.js`. For automatic restarts during development, use its existing `start` script instead:

```sh
npm start
```

The API defaults to `http://localhost:3000`. Its MongoDB connection is currently hardcoded to `mongodb://localhost:27017/mydb`, without embedded credentials. An API request such as `GET /users` can be checked with Postman or another HTTP client.

### Configuration and script limits

| Setting | Current implementation |
| --- | --- |
| `PORT` | Optional process environment variable; defaults to `3000` |
| MongoDB URI | Hardcoded in `backend/src/index.js`; no database environment variable is read |
| Frontend API URL | Not configured; the frontend makes no API requests yet |

No `.env` file is required by the current implementation, and the backend does not load one automatically. Supply `PORT` through the terminal environment if you need a different port.

Backend `build` and `preview` scripts belong to the leftover Vite starter, not to the Express API. That starter imports a missing `src/counter.js`; those scripts are not a working API build workflow. Neither package currently provides a test or lint script.

## Development Focus

- **Modular structure:** separate React pages and components, plus backend routes, a creation controller and a Mongoose model. Some backend handlers still live directly in the router.
- **State and navigation:** pass authentication state into a reusable route wrapper and reason about redirects and page reloads.
- **API and database fundamentals:** handle JSON requests, query MongoDB, validate data and return HTTP status codes. Connecting the frontend to these services is a next step.
- **Debugging and error handling:** inspect requests and responses and improve consistency between validation, missing-resource and server-error cases.
- **Authentication fundamentals:** distinguish UI navigation restrictions from identity verification and server-side authorization.

## Roadmap

The following items are planned, not completed:

- Connect registration and login forms to API requests and update React state from verified responses.
- Implement backend authentication, password hashing and JWT issuance and verification.
- Add authentication middleware and authorization rules for protected API endpoints.
- Implement logout and session restoration, evaluating token-storage choices and their security trade-offs.
- Connect profile data and replace the feed placeholder with implemented functionality.
- Consolidate validation and error handling, including safe responses for unexpected server errors.
- Introduce environment-based database configuration and safe example configuration files.
- Add automated tests and a consistent linting workflow.
- Remove unrelated cache and starter artifacts through a separately reviewed cleanup.

## Project Status

Outlab is an evolving personal development laboratory. The frontend demonstrates authentication UI and route-guard structure; the backend is an independent user-data API. End-to-end authentication is not operational, and the API must not be exposed with real user data in its current state.

## Author

**Adriel Funini dos Santos**  
Junior Full Stack Developer

[GitHub](https://github.com/adrielfunini16)
