import express from 'express';
import mongoose from 'mongoose';

const app = express()

const PORT = 4000
await mongoose.connect ('mongodb+srv://<Fresh_Market_Admin_Project>:<LWtIIk7OyNdpqPGd>@fredericka.bzyjsbq.mongodb.net/?retryWrites=true&w=majority&appName=Fredericka')


app.listen(PORT, () => {
console.log('express app is running on 4000')
}
)