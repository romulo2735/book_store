import {Author} from "../models/Author.js";

export default class AuthorController {
    static async getAuthors(req, res, next) {
        try {
            const authors = await Author.find({});

            if (!authors) {
                return res.status(200).json({});
            }

            res.status(200).json(authors);
        } catch (error) {
            next(error);
        }
    }

    static async getAuthorById(req, res, next) {
        try {
            const id = req.params.id;
            const author = await Author.findById(id);

            if (!author) {
                return res.status(404).send({message: "Author not found"});
            }

            res.status(200).send(author);
        } catch (error) {
            next(error);
        }
    }

    static async createAuthor(req, res, next) {
        try {
            const author = await Author.create(req.body);
            res.status(201).json({message: "Author: ", author});
        } catch (error) {
            next(error);
        }
    }

    static async updateAuthor(req, res, next) {
        try {
            const author = await Author.findByIdAndUpdate(req.params.id, req.body);
            res.json(author);
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const author = await Author.findByIdAndDelete(req.params.id);

            if (!author) {
                return res.status(404).json({message: "Author not found"});
            }
            res.json(author);
        } catch (error) {
            next(error);
        }
    }
}