// importar dependência
const express = require('express');
const path = require('path');

// iniciando lib express
const server = express();

server
// declarando onde estão os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'view'))
.set('view engine', 'hbs')

// criar uma rota
.get('/', (request, response) => {
  // console.log(path.join(__dirname, 'views', 'index.html'));
  // utilizando hbs não precisa utilizar esse path aqui embaixo
  // return response.sendFile(path.join(__dirname, 'views', 'index.html'));
  return response.render('index');
});

// ligar o servidor na porta
server.listen(5500);

/* ATENÇÃO : 
O nodemon pode crashar, Erro: Error: listen EADDRINUSE :::5500
Significa que a porta já está em uso, para resolver isso você pode encerrar o processo que está rodando nessa porta executando o comando:

  pkill node
*/