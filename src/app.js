import express from "express";
import conn from "./config/connect.js";

import routes from "./routes/index.js";

const connect = await conn()

connect.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
})

connect.once("open", () => {
    console.log("MongoDB connected!");
})

const app = express();
routes(app);

// Using inMemory database //
/**
 const books = [{id: 1, title: "Book 1"}, {id: 2, title: "Book 2"}, {id: 3, title: "Book 3"}, {id: 4, title: "Book 4"}, {id: 5, title: "Book 5"}]

 function findById(id) {
 return books.findIndex(book => book.id === Number(id));
 }
 **/


// Way to call routes without controllers //
/**
 app.get("/", (req, res) => {
 res.status(200).send("Hello World!");
 });

 app.get("/books", async (req, res) => {
 const listBooks = await book.find({});
 res.status(200).json(listBooks);
 });

 app.get("/books/:id", (req, res) => {
 const index = findById(req.params.id);
 res.status(200).json(books[index]);
 })

 app.post("/books", (req, res) => {
 books.push(req.body);
 res.status(201).send("Book created!");
 });

 app.put("/books/:id", (req, res) => {
 const index = findById(req.params.id);
 books[index].title = req.body.title;
 res.status(200).send("Book updated!");
 });

 app.delete("/books/:id", (req, res) => {
 const index = findById(req.params.id);
 books.splice(index, 1);
 res.status(200).send("Book deleted!");
 });
 **/
export default app;