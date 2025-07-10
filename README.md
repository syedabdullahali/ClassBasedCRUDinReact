````md
# 🛠️ React Lifecycle + Full-Stack CRUD App (TypeScript: React + Node.js + MongoDB)

This project is a **full-stack CRUD (Create, Read, Update, Delete)** web application focused on learning and comparing **React lifecycle methods** using both **Class Components** and **Function Components with Hooks**. Built with **TypeScript** on both the client and server sides.

---

## 🚀 Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React.js (Class & Function Components) + TypeScript |
| Backend   | Node.js + Express.js + TypeScript              |
| Database  | MongoDB (via Mongoose)                         |

---

## 🌟 Learning Goals & Features

- 🧠 Explore **React lifecycle methods** in both **Class Components** and **Function Components (Hooks)**
- ✍️ Implement CRUD operations for full-stack learning
- ⚙️ TypeScript throughout the stack
- 📦 MongoDB for data persistence
- ♻️ Clean, modular code and reusable components
- 🔁 Optional real-time updates using event/state refresh
- 🌐 CORS-enabled backend for local development

---

## 📁 Folder Structure

```bash
.
├── client/             # React frontend (TypeScript)
│   ├── components/     # Class and Function components with lifecycle logic
│   ├── services/       # API logic
│   └── ...
├── server/             # Node.js backend (TypeScript)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
````

---

## 🔧 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/items`     | Fetch all items      |
| POST   | `/api/items`     | Create a new item    |
| PUT    | `/api/items/:id` | Update an item by ID |
| DELETE | `/api/items/:id` | Delete an item by ID |

---

## 📦 Server Scripts (`server/package.json`)

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts"
}
```

---

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

## 📦 Client Scripts (`client/package.json`)

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
MONGO_URI=mongodb://localhost:27017/reactLifecycleCRUD
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

---

## 📚 Key Focus Areas

* 🔍 Class Component lifecycle methods: `componentDidMount`, `shouldComponentUpdate`, `componentWillUnmount`, etc.
* 🔍 Function Component hooks: `useEffect`, `useLayoutEffect`, `useMemo`, `useCallback`, etc.
* 🔄 How state updates and re-renders differ across component types
* 🔄 Hook dependency behavior and side-effects

---

## 💬 Contribution & Feedback

This project is primarily for learning purposes. If you find bugs or have suggestions for improvement, feel free to open an issue or PR.

---
