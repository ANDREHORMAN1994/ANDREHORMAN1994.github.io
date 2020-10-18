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
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );

      const orphanage = results[0];
      orphanage.images = orphanage.images.split(',');
      orphanage.firstImage = orphanage.images[0];

      orphanage.open_on_weekends == '0'
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return response.render('orphanage', { orphanage });
    } catch (error) {
      console.log(error);
      return response.send('Erro no banco de dados!');
    }
  },

  createOrphanage(request, response) {
    return response.render('create-orphanage');
  },

  async saveOrphanage(request, response) {
    const fields = request.body;
    // console.log(fields);

    // validar se os campos estão preenchidos
    if (Object.values(fields).includes('')) {
      return response.send('Preencha todas informações do mapa!');
    }

    try {
      //  salvar um orfanato
      const db = await dataBase;
      await saveOrphanage(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });
      return response.redirect('/localization');
    } catch (error) {
      console.log(error);
      return response.send('Erro no banco de dados');
    }
  },
};
