import express from "express";
import http from "http";
import pdf from 'pdf-parse/lib/pdf-parse.js'
import pdfModel from "../models/pdfs.js";
import { GoogleApis } from "googleapis";
const PdfParser = async (req, res) => {
    const {pdfData} = req.body
    if (!pdfData){
        return res.status(400).json({success:false, msg: 'Please input a valid PDF'})
    }
    try{
        const binary = Buffer.from(pdfData, 'base64');
        const pdfText = await pdf(binary)
        console.log("PDF sent successfully")
        res.status(200).json({success: true, pdfText})
    }
    catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
}
export default PdfParser