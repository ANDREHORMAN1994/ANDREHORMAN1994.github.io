// importar dependência
const express = require('express');
const path = require('path');

// iniciando lib express
const server = express();

// declarando onde estão os arquivos estáticos
server.use(express.static('public'))

// criar uma rota
.get('/', (request, response) => {
  // console.log(path.join(__dirname, 'views', 'index.html'));
  return response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// ligar o servidor na porta
server.listen(5500);

/* ATENÇÃO : 
O nodemon pode crashar, Erro: Error: listen EADDRINUSE :::5500
Significa que a porta já está em uso, para resolver isso você pode encerrar o processo que está rodando nessa porta executando o comando:

  pkill node
*/