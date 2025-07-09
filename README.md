```md
# 🛠️ Full-Stack CRUD App with TypeScript (React + Node.js + MongoDB)

This is a **full-stack CRUD (Create, Read, Update, Delete)** web application built using **React.js (TypeScript)** on the client side and **Node.js with Express.js (TypeScript)** on the server side. Data is stored in **MongoDB** using **Mongoose**.

---

## 🚀 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React.js (Class Components) + TypeScript |
| Backend   | Node.js + Express + TypeScript    |
| Database  | MongoDB (via Mongoose)            |

---

## 🌟 Features

- ✍️ Create, Read, Update, Delete operations
- ⚙️ Built with **TypeScript** on both frontend and backend
- 📦 Connected to **MongoDB** for data persistence
- 💻 Clean code with reusable components and modules
- 🔄 Real-time updates (optional with socket/event or state refresh)
- 🌐 CORS-enabled server for smooth local development

---

## 📁 Folder Structure



---

## 🔧 API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/api/items`     | Fetch all items        |
| POST   | `/api/items`     | Create a new item      |
| PUT    | `/api/items/:id` | Update an item by ID   |
| DELETE | `/api/items/:id` | Delete an item by ID   |

---

## 📦 Server Scripts (`server/package.json`)

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts"
}
````

## 🧪 Server Dev Dependencies

```json
"devDependencies": {
  "@types/express": "...",
  "@types/node": "...",
  "ts-node": "...",
  "typescript": "..."
}
```

---

## 🧩 Client Scripts (`client/package.json`)

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

---

## 🔐 Environment Variables

Create a `.env` file in your `server` directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/classBasedCRUDinReact
```

Use `dotenv` in your server entry:

```ts
import dotenv from 'dotenv';
dotenv.config();
```

---

## 🚀 Getting Started

### 🖥️ Run Server

```bash
cd server
npm install
npm run dev
```

### 💻 Run Client

```bash
cd client
npm install
npm start
```

