# 📚 Books Store API

A simple RESTful API to manage books and authors, built with Node.js. It supports basic CRUD operations and allows searching books by publisher.

## ✨ Features

- Manage books and authors with full CRUD operations
- Filter books by publisher
- RESTful and well-structured endpoints
- Easy to set up and run

## 📌 Endpoints

### 📘 Books

- `GET /books`: List all books
- `GET /books/search?publisher=<name>`: List books filtered by publisher
- `GET /books/:id`: Get book by ID
- `POST /books`: Create a new book
- `PUT /books/:id`: Update an existing book
- `DELETE /books/:id`: Delete a book

### ✍️ Authors

- `GET /authors`: List all authors
- `GET /authors/:id`: Get author by ID
- `POST /authors`: Create a new author
- `PUT /authors/:id`: Update an existing author
- `DELETE /authors/:id`: Delete an author

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)
- npm (v8+)
- MongoDB or another database if used

### 🛠 Installation

```bash
# Clone the repository
git clone git@github.com:romulo2735/book_store.git

# Navigate into the project directory
cd book_store

# Install dependencies
npm install

# Start the development server
npm start
```

[Book Store Collection Postman.json](book_store_collection.json)