import express from "express";
import http from "http";
import path from "path"
import pdf from 'pdf-parse/lib/pdf-parse.js'
import calendarRouter from "./routes/calendar.js";
import authRouter from "./routes/auth.js";
import {connectDB} from "./db/connect.js";
import notFound from "./middleware/notfound.js";
import dotenv from 'dotenv';
import serverError from "./middleware/error.js";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const __dirname = path.resolve()


app.use(express.static(path.resolve(__dirname, './frontend/public')))
app.use(express.urlencoded({extended: true, limit: '50 mb'}))
app.use(express.json({limit: '50 mb'}))


app.use('/api/auth', authRouter)
app.use('/api/calendar', calendarRouter)

app.use(notFound)
app.use(serverError)

await connectDB();
let bucket;
(() => {
  mongoose.connection.on("connected", () => {
    bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "filesBucket",
    });
  });
})();
const port = process.env.PORT || 5000
const start = async () => {
  try{
    await connectDB();
    app.listen(port, () =>{
      console.log(`Server is running on port ${port}`)
    })
  }
  catch(error){
    console.log(error)
  }
}
start();