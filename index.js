import express from "express";
import http from "http";
import path from "path"
const app = express();

app.use(express.static(path.resolve(__dirname, './frontend')))

app.get('/', (req, res) => {
    res.json([{}])
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend", "index.html"))
})

app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})