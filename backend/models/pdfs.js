import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    file: {
        type: Buffer,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
    
}, {timestamps: true})
const pdfModel = mongoose.model("PDF", pdfSchema)
export default pdfModel;