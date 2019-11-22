const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/',(req,res) => {
    res.send("<h1>node-db3-challenge</h1>")
  })

module.exports = server;