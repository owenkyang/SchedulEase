const http = require('http')

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type':'text/html'})
    res.write('<h1>test</h1>')
    res.end()
})

server.listen(1234)
