import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js"

if(!DB_URI) {
    console.log("Please define the MONGODB_URL environment variable inside .env.<development/production>");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to database in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error to connect to database", error)
        process.exit(1);
    }
}

export default connectToDatabase;