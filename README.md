🚀 express-mongodb-api-starter

A clean, scalable, and production-ready Node.js + Express + MongoDB + TypeScript starter template.
Built with modular architecture, generic CRUD operations, pagination, authentication, and reusable services — perfect for quickly starting new backend projects.
---

## 🧠 Tech Stack

| Category     | Technology                                    |
| ------------ | --------------------------------------------- |
| Backend      | Node.js, Express.js                           |
| Language     | TypeScript                                    |
| Database     | MongoDB (Mongoose ORM)                        |
| Pagination   | mongoose-paginate-v2                          |
| Validation   | mongoose-unique-validator _(optional)_        |
| Architecture | MC (Model-Controller) + Service Layer Pattern |

---

✨ Features
🔐 Authentication

JWT-based login

Middleware-based token verification

📦 Generic CRUD Operations

Reusable CRUD functions to avoid duplicate logic

Works with any Mongoose model

🔍 Search + Filtering

Flexible query parameters for dynamic search

Supports regex searches

📑 Pagination

Implemented using mongoose-paginate-v2

Ready-to-use paginated endpoints

⚙️ Clean & Scalable Architecture

Industry-standard folder structure

Easy to extend with modules

Layers separated: routes → controllers → services → models

🧪 Testing Ready

Pre-configured test/ folder for unit/integration tests

🗂️ File Upload Support

Ready folder for images/documents (Multer-friendly setup)

## 🧩 Folder Structure

HR-APIS-BACKEND/
├─ src/
│ ├─ config/ # DB connection and configs
│ ├─ models/ # Mongoose schemas
│ ├─ interfaces/ # interfaces
│ ├─ controllers/ # Business logic
│ ├─ routes/ # API routes
│ ├─ middleware/ # Authentication, error handling
│ ├─ helpers/ # Reusable functions
│ ├─ utils/ # Utility functions
│ ├─ services/ # External APIs, payment integrations
│ └─ app.ts # Express app initialization
├─ uploads/ # File uploads (images, documents)
├─ test/ # Unit and integration tests
├─ .env # Environment variables
├─ package.json
├─ package-lock.json
├─ tsconfig.json
└─ server.ts # Entry point

git clone https://github.com/muhammadkhan123786/express-mongodb-api-starter.git

Install packages:
npm install

🔧 Environment Setup

Create a .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your-secret-key


▶️ Running the Project
Development:
npm run dev

Production Build:
npm run build

App runs at:
👉 http://localhost:5000

