import express from "express";
import http from "http";
import path from "path"
import PdfParse from "pdf-parse";
const app = express();

app.use(express.static(path.resolve(__dirname, './frontend')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/api/pdf-parse", async (req, res) => {
    const {pdfData} = req.body
    if (!pdfData){
        return res.status(400).json({success:false, msg: 'Please input a valid PDF'})
    }
    try{
        const pdfText = await PdfParse(pdfData)
        res.status(200).json({success:true, data: pdfText})
    }
    catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
});

app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})