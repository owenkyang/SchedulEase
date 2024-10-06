import express from "express";
import http from "http";
import path from "path"
import pdf from 'pdf-parse/lib/pdf-parse.js'
import calendarRouter from "./routes/calendar.js";
import authRouter from "./routes/auth.js";
import {connectDB} from "./db/connect.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, './frontend/public')))
app.use(express.urlencoded({extended: true, limit: '50 mb'}))
app.use(express.json({limit: '50 mb'}))


app.use('/api/auth', authRouter)
app.use('/api/calendar', calendarRouter)

await connectDB();
let bucket;
(() => {
  mongoose.connection.on("connected", () => {
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "filesBucket",
    });
  });
})();

app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})