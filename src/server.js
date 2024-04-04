import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import Product from './routes/product.routes.js'

dotenv.config()

const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));



const PORT = process.env.PORT || 8000

await mongoose.connect(process.env.MONGO_URI)


app.use(Product)

app.listen(PORT, () => {
console.log(`express app is running on ${PORT}`)
}
)
