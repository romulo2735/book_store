import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    }, name: {
        type: String, required: [true, "Name is required"]
    }, country: {
        type: String
    }
}, {versionKey: false});

const Author = mongoose.model("authors", authorSchema);

export {Author, authorSchema}