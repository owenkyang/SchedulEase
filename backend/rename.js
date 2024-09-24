import express from "express";
import http from "http";
import cors from "cors";

const server = createServer((req, res) =>{
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>test</h1>')
    res.end()
})

server.listen(1234)
