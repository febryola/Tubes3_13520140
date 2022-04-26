import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const hasilPrediksi = db.define("hasilprediksi", {

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
    }
}, {
    freezeTableName: true
});

export default hasilPrediksi;