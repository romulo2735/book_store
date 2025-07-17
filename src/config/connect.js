import mongoose from "mongoose";
import process from "process";

async function conn() {
    await mongoose.connect(process.env.DB_MONGO_CONNECTION);
    return mongoose.connection;
}

export default conn;