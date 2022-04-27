const connection = require("../config/database");

async function getDiseaseDnaSequence(name) {
  return new Promise((resolve, reject) => {
    connection.connect(() => {
      connection.query(
        `SELECT rantaiDna FROM jenispenyakit WHERE namaPenyakit = '${name}';`,
        (err, result) => {
          resolve(result);
        }
      );
    });
  });
}

async function getAllDiseases() {
  return new Promise((resolve, reject) => {
    connection.connect(() => {
      connection.query(
        `SELECT namaPenyakit FROM jenispenyakit;`,
        (err, result) => {
          resolve(result);
        }
      );
    });
  });
}

module.exports = { getDiseaseDnaSequence, getAllDiseases };
