import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to Database"))