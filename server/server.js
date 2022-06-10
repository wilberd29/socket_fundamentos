const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();

let server=http.createServer(app); //defnir el servidor de prod

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); //ruta publica para acceder

//inicializar el socket IO Comunicacion del backend
//let io=socketIO(server);
module.exports.io=socketIO(server);  //pasar el io al socket.js

//saber si un usuario se conecta al servidor cliente
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});


