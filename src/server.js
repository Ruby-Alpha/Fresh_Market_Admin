import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
console.log(`express app is running on ${PORT}`)
}
)
