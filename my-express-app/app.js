const express = require('express');
const { link } = require('fs');
const app = express();

const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Hellooooo World!');
});
server.listen(8080);