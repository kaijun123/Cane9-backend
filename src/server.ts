import cors from "cors"
import * as dotenv from 'dotenv';
import express, { json } from "express"
import http from "http"
import { Server } from "socket.io"
import router from "./routes";
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const server = http.createServer(app);

const io = new Server(server);
app.use(cors())
app.use(json())
app.use(router)

io.on('connection', (socket) => {
  console.log('a user connected');
  // const openConnections = io.of("/").sockets.size;
  // console.log(openConnections)

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("update location", (arg, callback) => {
    console.log(arg);
    callback("Received updated location");
  });
});

server.listen(port, () => {
  console.log(`Listening to port ${port}`)
});