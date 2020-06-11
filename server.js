const express = require('express');

//Executando a funçap express

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Rocketseat");
});

app.listen(3001);