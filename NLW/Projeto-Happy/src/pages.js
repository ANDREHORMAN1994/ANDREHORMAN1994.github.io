// ANTES ESTAVA UTILIZANDO O FAKEDATA PARA INSERÇÃO DE DADOS NA MINHA PÁGINA
// const orphanages = require('./database/fakedata');

// INSERINDO AGORA O SQL COMO BANCO DE DADOS
const dataBase = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
  index(request, response) {
    return response.render('index');
  },

  async localization(request, response) {
    try {
      const db = await dataBase;
      const orphanages = await db.all('SELECT * FROM orphanages');
      return response.render('localization', { orphanages });
    } catch (error) {
      console.log(error);
      return response.send('Erro no banco de dados!');
    }
  },

  async orphanage(request, response) {
    const id = request.query.id;
    try {
      const db = await dataBase;
      const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
      const orphanage = results[0];
      orphanage.images = orphanage.images.split(',')
      return response.render('orphanage', { orphanage });
    } catch (error) {
      console.log(error);
      return response.send('Erro no banco de dados!');
    }
  },

  createOrphanage(request, response) {
    return response.render('create-orphanage');
  },
};
