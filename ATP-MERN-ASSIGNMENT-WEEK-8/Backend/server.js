import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { UserApp } from "./API's/UserAPI.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: ["https://atp-mern-assignment-week-8-eta.vercel.app", "http://localhost:5173"]
}));
app.use(express.json());

// Database connection
const DB_URL = process.env.DB_URL;

if (DB_URL) {
    mongoose.connect(DB_URL)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('MongoDB connection error:', err));
} else {
    console.warn('DB_URL is not set. Skipping MongoDB connection.');
}

// Routes
app.use('/api', UserApp);

const PORT = process.env.PORT || 2000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use.`);
    } else {
        console.error('Server error:', err);
    }
});
