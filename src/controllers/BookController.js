import Book from "../models/Book.js";
import {Author} from "../models/Author.js";

export default class BookController {
    static async getBooks(req, res, next) {
        try {
            const books = await Book.find({});
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    }

    static async getBookById(req, res, next) {
        try {
            const books = await Book.findById(req.params.id);
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    }

    static async createBook(req, res, next) {
        try {
            const author = await Author.findById(req.body.author);

            const data = {
                ...req.body,
                author: {
                    ...author._doc
                }
            };
            const book = await Book.create(data);

            res.status(201).json({message: "Book created!", book});
        } catch (error) {
            next(error);
        }
    }

    static async updateBook(req, res, next) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    }

    static async getBooksByPublisher(req, res, next) {
        try {
            const books = await Book.find({publisher: req.query.publisher});
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    }
}