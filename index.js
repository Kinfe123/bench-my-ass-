const http = require('http');
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 8082
// app.listen(port , (req , res)=> {
//     console.log("The server is up and runnung ar port: " , PORT)
// })

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World JS\n");
});

server.listen(8082, 'node-server');
