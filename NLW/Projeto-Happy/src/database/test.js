const dataBase = require('./db');
const saveOrphanage = require('./saveOrphanage');

dataBase.then(async (db) => {

  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: '-7.3330727',
    lng: '-35.3408701',
    name: 'Lar das Crianças',
    about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    whatsapp: '+55 11 96548-3516',
    images: [
      'https://lunetas.com.br/wp-content/uploads/2018/10/qto-criancas-inesantich-ds-f-45.jpg.webp',

      'https://i1.wp.com/arquidiocesedeteresina.org.br/wp-content/uploads/2019/10/acolhimento.jpg?fit=1600%2C1200&ssl=1',

      'https://fundacaolasalle.org.br/wp-content/uploads/2018/08/Evento-TS-Guajuviras-2.jpeg',

      'https://www.petrusnews.com.br/wp-content/uploads/2018/09/Abrigo-Estrela-Guia-18-04-de-maio-de-2018-Mateus-Argenta-1.jpg',

      'https://www.osmais.com/wallpapers/201407/criancas-felizes-wallpaper.jpg',

      'https://www.osmais.com/wallpapers/201309/criancas-alegres-wallpaper.jpg'
    ].toString(),
    instructions: 'Venha nos visitar e traga muito amor e paciência para dar.',
    opening_hours: 'Horário de visitas Das 18h até 8h',
    open_on_weekends: '0'
  })

  // consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // // consultar apenas um dado na tabela
  // const selectOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  // console.log(selectOrphanage);

  // // deletar um dado na tabela
  // const deleteElementTable = await db.run('DELETE FROM orphanages WHERE id = "4"')

  // // deletar todos os dados da tabela 
  // const deleteTable = await db.run('DELETE FROM orphanages')
  // console.log(deleteTable);
});
