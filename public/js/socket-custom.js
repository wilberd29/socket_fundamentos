  
var socket=io();
   socket.on('connect', function(){
       console.log('cliente Conectado al servidor');
   });

   socket.on('disconnect', function(){
       console.log('cliente Perdimos conexion con el servidor');
   });

   //socket enviar informacion al server emit
   //(evento, objeto, funcion) si todo sale bien
   socket.emit('EnviarMensaje', {
       usuario: 'Wilber',
       mensaje: 'Conectando al socket'
   }, function(resp) { //confirmacion si mensaje llego ok al server o
       //console.log('se disparo el callback')
       console.log('respuesta del servidor', resp);
   });

   //Escuchar informacion del servidor
   socket.on('EnviarMensaje', function(resp){
       console.log(resp);
   });
