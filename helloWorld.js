const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostrarOla(request, response) {
    response.send("Hello, World!");
};

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
};


app.use(router.get('/ola', mostrarOla));
app.listen(porta, mostrarPorta);