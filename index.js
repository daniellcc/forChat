const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


io.on('connection', socket => {

	socket.broadcast.emit('message', 'welcome user')
	
	socket.on('messaged', msg => {
		console.log('message: ', msg);
		io.emit('messaged', msg);
	});

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 5000;

http.listen(port)