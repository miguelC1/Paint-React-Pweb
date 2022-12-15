const express = require('express');
const app = express();

const http = require('http');
const server= http.createServer(app)


const port = process.env.PORT || 5000;
const io= require("socket.io")(port, {
      cors:{
            origin: "http://localhost:3000",
            methods: ["GET", "POST" ],
      }
} );

io.on("connection", (socket)=> {
      console.log("user ONLINE")

      socket.on("canvas-data",(data) =>{
            console.log(data);
            socket.broadcast.emit("canvas-data",data);
      })
})






/*
var io = require('socket.io')(http);

io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})


app.get('/',(req, res)=>{
	res.send('<h2>HOLA sty funcionando</h2>');
	console.log('Se recibio una petición get');
});

server.listen(server_port, ()=>{
	console.log('Servidor http correindo en el puerto 5000');
    console.log("Started on : "+ server_port);
});*/