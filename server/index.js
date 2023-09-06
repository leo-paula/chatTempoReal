import express from "express";
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = 3000

app.use(cors({origin: 'http://localhost:5173'}))


io.on('connection', (socket) =>{
    console.log(`Nova conexão, com o id: ${PORT}!`);
})
io.on('disconnection', (socket) => {
    console.log(`O id: ${PORT} foi desconectado!`);
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))