const { Sequelize } = require("sequelize");
const db = require("../config/database");

const { DataTypes } = Sequelize;

const hasilPrediksi = db.define(
  "hasilprediksi",
  {
    tanggalPrediksi: {
      type: DataTypes.DATE,
    },
    namaPasien: {
      type: DataTypes.STRING,
    },
    penyakitPrediksi: {
      type: DataTypes.STRING,
    },
    statusPrediksi: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = hasilPrediksi;
