// importar dependência
const express = require('express');

// iniciando lib express
const server = express();

// criar uma rota
server.get('/', (request, response) => {
  return response.send('oi');
});

// ligar o servidor na porta
server.listen(5500);
