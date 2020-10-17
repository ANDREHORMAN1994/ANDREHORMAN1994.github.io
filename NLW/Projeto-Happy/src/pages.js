const orphanages = require('./database/fakedata');

module.exports = {

  index(request, response) {
    return response.render('index');
  },

  localization(request, response) {
    return response.render('localization', {orphanages});
  },

  orphanage(request, response) {
    return response.render('orphanage');
  },

  createOrphanage(request, response) {
    return response.render('create-orphanage');
  }
}