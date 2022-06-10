const {io} = require('../server');

io.on('connection',(client)=> {
    console.log('Usuario conectado server');

    //cliente se desconecta
    client.on('disconnect',()=> {
        console.log('Usuario desconectado server');
    });

    //Escuchar el cliente on=escuchar
    client.on('EnviarMensaje', (mensaje, callback)=>{
        console.log(mensaje);
        client.broadcast.emit('EnviarMensaje', mensaje);
        // if (mensaje.usuario){
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // }else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }
        
    })
    
    //Enviar mensaje al cliente
    client.emit('EnviarMensajeCli', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })
});