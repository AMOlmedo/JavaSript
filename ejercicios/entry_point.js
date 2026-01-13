//HTTP es un modulo de node js

const http = require("http");

function requestController (req, res){
    // logica de la funcion
    console.log("se recibio una nueva request");
    const url = req.url;
    const method = req.method;
    console.log({url, method});
};

// Configuracion del servidor
const server = http.createServer(requestController);

server.listen(4000);