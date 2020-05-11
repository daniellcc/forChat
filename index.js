const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', socket => {
	console.log('new connection');

	socket.on('send message', msg => {
		io.sockets.emit('message', msg)
	});

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 5000;

http.listen(port)