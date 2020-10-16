// importar dependência
const express = require('express');

// iniciando lib express
const server = express();

// criar uma rota
server.get('/', () => {
  console.log('teste');
});

// ligar o servidor na porta
server.listen(5500);