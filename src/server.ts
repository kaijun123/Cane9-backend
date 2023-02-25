import cors from "cors"
import * as dotenv from 'dotenv';
import express, { json } from "express"
import http from "http"
import { Server } from "socket.io"
import router from "./routes";
import admin from "firebase-admin"
import credentials from "../firebase-config/service-account.json"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const server = http.createServer(app);

const io = new Server(server);
app.use(cors())
app.use(json())
app.use(router)

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   const openConnections = io.of("/").sockets.size;
//   console.log(openConnections)

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on("update location", (arg, callback) => {
//     console.log(arg);
//     callback("Received updated location");
//   });
// });

const serviceAccountCredentials = credentials as admin.ServiceAccount
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountCredentials)
});
export const messaging = admin.messaging()

server.listen(port, () => {
  console.log(`Listening to port ${port}`)
});