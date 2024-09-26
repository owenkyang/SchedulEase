import express from "express";
import http from "http";
import path from "path"
const app = express();

app.use(express.static(path.resolve(__dirname, './frontend')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/api/pdf-parse", (req, res) => {
    
})

app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})