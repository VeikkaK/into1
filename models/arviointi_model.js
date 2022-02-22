const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idArviointi,Päivämäärä,Arvosana,idOpintojakso,idOpiskelija) values(?,?,?,?,?)',
      [arviointi.idArviointi, arviointi.Päivämäärä, arviointi.Arvosana, arviointi.idOpintojakso, arviointi.idOpiskelija],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idArviointi=?,Päivämäärä=?, Arvosana=?, idOpintojakso=?,idOpiskelija=? where idArviointi=?',
      [arviointi.idArviointi, arviointi.Päivämäärä, arviointi.Arvosana, arviointi.idOpintojakso, arviointi.idOpiskelija],
      callback
    );
  }
};
module.exports = arviointi;