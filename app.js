require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
//Puerto definido 
//const port = 8080;

//utlizar handlebars Todo: require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//controlador
app.get('/', (req, res) =>{
    //renderizar
    //res.render('home');
    //mandar argumentos
    res.render('home', {
        nombre: 'Yesenia',
        titulo: 'Curso de Node'
    });
  })

app.get('/generic', (req, res) =>{
    //renderizar
    res.render('generic', {
        nombre: 'Yesenia',
        titulo: 'Curso de Node'
    });
    
  })

app.get('/elements', (req, res) =>{
    //renderizar
    res.render('elements', {
        nombre: 'Yesenia',
        titulo: 'Curso de Node'
    });
    
  })


// Hacer publica una carpeta - Servir contenido Estatico
//La ruta publica tiene prioridad
app.use( express.static('public'))

//Ya no es necesario con el app.use publico
//app.get('/', function (req, res) {
//  res.send('Home Page')
//})

app.get('/hola-mundo', (req, res) =>{
    res.send('Hello World en su respectiva ruta')
  })
app.get('/generic', (req, res) =>{
    res.sendFile(__dirname + '/public/generic.html');
  })
app.get('/elements', (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html');
  })


  //Cualquier otra ruta que no este definida *
app.get('*', function (req, res) {
    //para mandar a una pagina definida en public se utiliza sendFiles
    res.sendFile(__dirname + '/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})