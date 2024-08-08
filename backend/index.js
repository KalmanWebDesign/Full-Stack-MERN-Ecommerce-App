import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Mongo Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
}).catch(err => {
        console.error('MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// routes config
routes(app);

// Get config
app.get('/', (req, res) => {
    res.send(`Our app is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your product server is running on port ${PORT}`)
});