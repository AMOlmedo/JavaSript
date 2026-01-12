//HTTP es un modulo de node js

const http = require("http");

function requestController (){
    // logica de la funcion
    console.log("recibimos una nueva request");
};

// Configuracion del servidor
const server = http.createServer(requestController);

server.listen(4000);