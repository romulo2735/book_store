import mongoose from "mongoose";

//eslint-disable-next-line no-unused-vars
export default function handlerErrors(err, req, res, next) {
    switch (true) {
        case err instanceof mongoose.Error.CastError:
            res.status(400).send({
                message: "One or more fields are invalid",
            });
            break;
        case err instanceof mongoose.Error.ValidationError:
            res.status(422).send({
                message: "One or more fields are invalid",
                errors: Object.values(err.errors).map(err => err.message)
            });
            break;
        default:
            res.status(500).send({
                message: "Internal Server Error"
            });
            break;
    }
}