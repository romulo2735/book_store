import mongoose from "mongoose";

//eslint-disable-next-line no-unused-vars
export default function handlerErrors(err, req, res, next) {
    if (err instanceof mongoose.Error.CastError) {
        res.status(400).send({
            message: "One or more fields are invalid",
        });
    } else {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
}