import mongoose from "mongoose";
import dotenv from 'dotenv';

mongoose.set('strictQuery', false);

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const DB_URI = `mongodb://127.0.0.1:27017/gmailCloneNew`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;