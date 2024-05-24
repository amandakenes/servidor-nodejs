const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const porta = 3333;

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Fundadora da PrograMaria',
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Hacker antiracista',
    },
]

function mostrarMulheres(request, response) {
    response.json(mulheres)
};

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta ", porta);
};

app.use(router.get('/mulheres', mostrarMulheres));
app.listen(porta, mostrarPorta);