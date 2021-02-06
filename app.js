const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const publicPath = path.resolve("public");
app.use ( express.static(publicPath) );

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
});

app.post('/register',(req,res) => {
    res.send(req.body);
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
});

app.post('/login',(req,res) => {
    res.send(req.body);
});