const db = require('../database');

const opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  add: function(opintojakso, callback) {
    return db.query(
      'insert into opintojakso (idOpintojakso,Nimi,Koodi,Laajuus) values(?,?,?,?)',
      [opintojakso.idOpintojakso, opintojakso.Nimi, opintojakso.Koodi, opintojakso.Laajuus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.query(
      'update opintojakso set idOpintojakso=?,Nimi=?, Koodi=?, Laajuus=? where idOpintojakso=?',
      [opintojakso.idOpintojakso, opintojakso.Nimi, opintojakso.Koodi, opintojakso.Laajuus],
      callback
    );
  }
};
module.exports = opintojakso;