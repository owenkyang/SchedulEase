import express from "express";
import http from "http";
import path from "path"
import pdf from 'pdf-parse/lib/pdf-parse.js'
import PdfParser from "../controllers/calendarController.js";

const calendarRouter = express.Router()

calendarRouter.post("/pdf-parse", PdfParser);

export default calendarRouter