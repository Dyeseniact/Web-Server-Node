const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    // texto plano
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    // json 
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //const persona = {
    //    id: 1,
    //    nombre: 'Fernando'
    //}

    ////Write recibe un string por lo cual debemos serializarlo con Json
    //res.write(JSON.stringify(persona));

    //Archivo delimitado por comas 
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    //Descarga un archivo por que es csv pero debemos agregar setHeader
    //res.write('id, nombre\n');
    //res.write('1, Fernando\n');
    //res.write('2, Maria\n');
    //res.write('3, Juan\n');
    //res.write('4, Pedro\n');

   
    res.write('Hola Mundo');

    res.end();

})
.listen( 8080 );

console.log('Escuchando en el puerto ', 8080);


//Notas: Podemos responder mediente los headers 