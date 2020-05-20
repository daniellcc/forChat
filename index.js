const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', socket => {

	io.sockets.emit('welcome message', 'welcome ');

	socket.on('selected room', room => {
		socket.join(room);

		console.log(io.sockets.adapter.rooms);

		socket.on('send message', msg => {
			io.to(room).emit('message', msg);
		});

		socket.on('disconnect', username => {
			console.log('user disconnected');
			io.to(room).emit(`${username} has leave the chat`);
		});
	});

	
  
});

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 5000;

http.listen(port)