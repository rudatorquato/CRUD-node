const express = require('express');

//Executando a funçap express

const app = express();

app.get('/', (req, res) => {
    res.send("FOI");
});

app.listen(3001);