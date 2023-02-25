import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

// ping the server periodically
const periodicUpdates = () => {
  setTimeout(() => {
    socket.emit('update location', 'new location', (response: any) => {
      console.log(response); // "Received updated location"
    })
    periodicUpdates()
  }, 2000)
}

socket.on('connect', () => {
  console.log(socket.id);
  periodicUpdates()
});

socket.on('disconnect', () => {
  console.log(socket.id); // undefined
  console.log("Disconnected from server")
});