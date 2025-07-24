import mongoose from "mongoose";
import {authorSchema} from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    publisher: {
        type: String,
        required: [true, "Publisher is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    pages: {
        type: Number,
        required: [true, "Pages is required"],
    },
    author: authorSchema

}, {versionKey: false});


const Book = mongoose.model("books", bookSchema);
export default Book;