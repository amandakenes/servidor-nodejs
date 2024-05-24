const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostrarHora(request, response) {
  const date = new Date();
  const hrs = date.toLocaleTimeString('pt-BR');

  response.json("São " + hrs);
}

function mostrarPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get("/horas", mostrarHora));
app.listen(porta, mostrarPorta);
