import express from "express";
import http from "http";
import path from "path"
import pdf from 'pdf-parse/lib/pdf-parse.js'
const app = express();

//app.use(express.static(path.resolve(__dirname, './frontend')))
app.use(express.urlencoded({extended: true, limit: '50 mb'}))
app.use(express.json({limit: '50 mb'}))

app.post("/login", (req, res) => {

})

app.post("/api/pdf-parse", async (req, res) => {
    const {pdfData} = req.body
    if (!pdfData){
        return res.status(400).json({success:false, msg: 'Please input a valid PDF'})
    }
    try{
        const binary = Buffer.from(pdfData, 'base64');
        const pdfText = await pdf(binary)
        res.status(200).json({success: true, pdfText})
    }
    catch(error){
        res.status(500).json({success: false, msg: error.message})
    }
});

app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})