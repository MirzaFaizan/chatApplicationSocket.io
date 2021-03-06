const express = require('express');
const app = express();
const socket = require('socket.io');

const port = process.env.PORT || '4000';

const server = app.listen(port,()=>{
    console.log('Listing on port 4000');
})

app.use(express.static('public'));


//socket setup
const io = socket(server);
io.on('connection',(socket)=>{
    console.log(`Made Connection ${socket.id}`);
    socket.on('chat',(data)=>{
        console.log(data);
        io.emit('chat',data);
    });
    
    socket.on('typing',(data)=>{
        console.log(data);
        socket.broadcast.emit('typing',data);
    })

});