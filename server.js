const express = require('express');
const app = express();
const server = require('http').createServer();
const options = {
    cors:true,
    origins:["http://localhost:3000"],
   };
const io = require('socket.io')(server, options);
io.on('connection', (client) => { 
    console.log("user " , client.id)
     client.on('messageSent', (message) => {
        console.log('sended ' , message)
        client.broadcast.emit("messageSent", message )
      });
});
server.listen(8000, () => {
    console.log('Server Listening')
});