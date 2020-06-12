const express = require('express');
const mongoose = require('mongoose')

//Inicia o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true, useUnifiedTopology: true}
);

//Primeira Rota
app.get('/', (req, res) => {
    res.send("FDEU CERTO");
});

app.listen(3001);