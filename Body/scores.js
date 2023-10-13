const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let liveScore = 0; // Initial score

io.on('connection', (socket) => {
  console.log('Client connected');
  
  // Send the current live score to the connected client
  socket.emit('scoreUpdate', liveScore);

  // Listen for score updates from clients
  socket.on('updateScore', (newScore) => {
    liveScore = newScore;
    // Broadcast the updated score to all connected clients
    io.emit('scoreUpdate', liveScore);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});