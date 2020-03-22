var http = require('http');
const express = require('express');

const app = express(); 
const server = http.createServer(app);  
app.get('*', function(req, res) {  
    res.send("Backend alive").status(200);
});

// Load socket
const BangOnlineServer = require('./BangOnlineServer');
const theServer = new BangOnlineServer(server);

server.listen(process.env.PORT || 4001);
