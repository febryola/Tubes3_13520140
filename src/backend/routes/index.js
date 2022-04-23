import express from "express";

import {
    getHasilPrediksi,
    createHasilPrediksi,
    getHasilPrediksiByTanggal,
    getHasilPrediksiByPenyakit,
    getHasilPrediksiByStatus,
    updateHasilPrediksi,
    deleteHasilPrediksi
} from "../controller/hasilPrediksi.js";

const router = express.Router();

router.get('/', getHasilPrediksi);
router.get('/Tanggal/:tanggalPrediksi', getHasilPrediksiByTanggal);
router.get('/Penyakit/:penyakitPrediksi', getHasilPrediksiByPenyakit);
router.get('/Status/:statusPrediksi', getHasilPrediksiByStatus);
router.post('/', createHasilPrediksi);
router.patch('/:id', updateHasilPrediksi);
router.delete('/:id', deleteHasilPrediksi);

export default router;