const pool = require("../config/database");

async function getDiseaseDnaSequence(name) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT rantaiDna FROM jenispenyakit WHERE namaPenyakit = '${name}';`,
          (err, result) => {
            connection.release();
            resolve(result);
          }
        );
      });
    });
  });
}

async function getAllDiseases() {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT namaPenyakit FROM jenispenyakit;`,
          (err, result) => {
            connection.release();
            resolve(result);
          }
        );
      });
    });
  });
}

module.exports = { getDiseaseDnaSequence, getAllDiseases };
