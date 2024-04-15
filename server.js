import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './src/routes/user.routes.js';
import cors from "cors";

dotenv.config();

const app = express()

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 8000

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use('/', router);

await mongoose.connect(mongoURI)
app.listen(PORT, () => {
console.log(`express app is running on ${PORT}`)
}
)
