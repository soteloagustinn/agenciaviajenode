// const express = require('express'); es otra alternativa para importar
import express from 'express';
import router from './router/index.js';
import db from './config/db.js';



const app = express();

// Conectar a la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch (error => console.log(error));


// Definir puerto
const port = process.env.PORT || 4500; 

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el a;o actual
app.use((req, res, netx) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return netx();
})

// Agregar body parser para leer los datos del formulario   
app.use(express.urlencoded({extended : true}))

// Definir la carpeta publica
app.use(express.static('public'));

// Agresar router
app.use('/', router);

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})