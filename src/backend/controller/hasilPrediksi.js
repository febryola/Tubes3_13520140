// const hasilPrediksi = require("../model/hasilPrediksiModel");
const pool = require("../config/database");

const getHasilPrediksi = async () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query("SELECT * FROM hasilprediksi;", (err, result) => {
          resolve(result);
        });
      });
    });
  });
};
const getHasilPrediksiByNama = async (name) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE namaPasien = '${name}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByTanggal = async (date) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE tanggalPrediksi = '${date}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByPenyakit = async (disease) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE penyakitPrediksi = '${disease}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByStatus = async (status) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE statusPrediksi = '${status}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByPenyakitAndStatus = async (disease, status) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE statusPrediksi = '${status}' AND penyakitPrediksi='${disease}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByTanggalAndPenyakit = async (date, disease) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE tanggalPrediksi = '${date}' 
        AND penyakitPrediksi = '${disease}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const getHasilPrediksiByTanggalAndPenyakitAndStatus = async (
  date,
  disease,
  status
) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `SELECT * FROM hasilprediksi WHERE tanggalPrediksi = '${date}' 
        AND penyakitPrediksi = '${disease}' AND statusPrediksi = '${status}'`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const createHasilPrediksi = async (date, name, disease, status) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `INSERT INTO hasilprediksi (tanggalPrediksi, namaPasien,
          penyakitPrediksi, statusPrediksi, createdAt)
          VALUES ('${date}', '${name}', '${disease}', '${status}', '${currentDate()}')`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

const updateHasilPrediksi = async (date, name, disease, status) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.connect(() => {
        connection.query(
          `UPDATE hasilprediksi
          SET
          VALUES ('${date}', '${name}', '${disease}', '${status}', '${currentDate()}')`,
          (err, result) => {
            resolve(result);
          }
        );
      });
    });
  });
};

// const deleteHasilPrediksi = async (req, res) => {
//   try {
//     await hasilPrediksi.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json({
//       message: "Data has been deleted",
//     });
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

// module.exports = {
//   getHasilPrediksi,
//   getHasilPrediksiByTanggal,
//   getHasilPrediksiByPenyakit
//    getHasilPrediksiByTanggalAndPenyakit
//   getHasilPrediksiByStatus,
//   createHasilPrediksi,
//   updateHasilPrediksi,
//   deleteHasilPrediksi,
// };

// await getHasilPrediksi();
// console.log(x);

function currentDate() {
  const date = new Date(Date.now());
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

module.exports = {
  getHasilPrediksi,
  getHasilPrediksiByNama,
  getHasilPrediksiByTanggal,
  getHasilPrediksiByPenyakit,
  getHasilPrediksiByStatus,
  getHasilPrediksiByPenyakitAndStatus,
  getHasilPrediksiByTanggalAndPenyakit,
  getHasilPrediksiByTanggalAndPenyakitAndStatus,
  createHasilPrediksi,
  updateHasilPrediksi,
  currentDate,
};
