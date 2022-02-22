const db = require('../database');

const opiskelija = {
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Opiskelijanumero) values(?,?,?,?)',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, Opiskelijanumero],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?, Osoite=?, Opiskelijanumero=? where idOpiskelija=?',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.Osoite, Opiskelijanumero],
      callback
    );
  }
};
module.exports = opiskelija;