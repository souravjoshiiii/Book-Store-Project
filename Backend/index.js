import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4004; // Fallback to 4004 if PORT is not set
const URI = process.env.MONGODBURI;

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectToDatabase();

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});