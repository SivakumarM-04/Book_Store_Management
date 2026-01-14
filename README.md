# 📚 Book Store Management App

A full-stack MERN (MongoDB, Express.js, React, Node.js) web application to manage a book inventory system with title, author, publish year, and more.

---

## Features

- Add, view, edit, and delete books
- View book details in card or table layout
- Real-time action alerts powered by Notistack
- Client-side routing with React Router
- Fully responsive user interface

---

## Tech Stack

- **Frontend**: React, React Router, Notistack, Vite
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB (local or cloud via MongoDB Atlas)

---

## Folder Structure
BookStore/  
├── backend/ # Express + MongoDB backend  
│ ├── Routes/  
│ ├── models/  
│ ├── config.js  
│ └── index.js  
├── frontend/ # React frontend  
│ ├── src/  
│ │ ├── Components/  
│ │ ├── pages/  
│ │ └── App.jsx  
│ └── public/  
└── .gitignore  

---

## 🖥️ How to Run the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/SivakumarM-04/Book_Store_Management.git)cd book-store-management
```

### 2. Setup the backend
```bash
cd backend
npm install
npm start
```
Ensure MongoDB is running locally, or configure a connection string in .env.  

### 3. Setup the frontend
```bash
cd ../frontend
npm install
npm run dev
```
Then visit:
➡️ http://localhost:5173/  

### Author  
### Sivakumar M  
 GitHub  : [@SivakumarM-04](https://github.com/SivakumarM-04)  
 LinkedIn: [@sivakumarm04](https://www.linkedin.com/in/sivakumarm04)

