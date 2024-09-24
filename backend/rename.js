import express from "express";
import http from "http";
import cors from "cors";
const app = express()

app.get('/', (req, res) =>{
    res.send('Home Page')
})
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

server.listen(1234)
