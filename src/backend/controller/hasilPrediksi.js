import hasilPrediksi from "../model/hasilPrediksiModel.js";

export const getHasilPrediksi = async(req, res) => {
    try {
        const hasil = await hasilPrediksi.findAll();
        res.json(hasil);
    } catch (error) {
        res.json({ message: error });
    }
}

export const getHasilPrediksiByTanggal = async(req, res) => {
    try {
        const hasil2 = await hasilPrediksi.findAll({
            where: {
                tanggalPrediksi: req.params.tanggalPrediksi
            }
        });
        res.json(hasil2);
    } catch (error) {
        res.json({ message: error });
    }
}

export const getHasilPrediksiByPenyakit = async(req, res) => {
    try {
        const hasil3 = await hasilPrediksi.findAll({
            where: {
                penyakitPrediksi: req.params.penyakitPrediksi
            }
        });
        res.json(hasil3);
    } catch (error) {
        res.json({ message: error });
    }
}

export const getHasilPrediksiByStatus = async(req, res) => {
    try {
        const hasil4 = await hasilPrediksi.findAll({
            where: {
                statusPrediksi: req.params.statusPrediksi
            }
        });
        res.json(hasil4);
    } catch (error) {
        res.json({ message: error });
    }
}

export const createHasilPrediksi = async(req, res) => {
    try {
        await hasilPrediksi.create(req.body);
        res.json({
            "message": "Data has been created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateHasilPrediksi = async(req, res) => {
    try {
        await hasilPrediksi.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data has been updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteHasilPrediksi = async(req, res) => {
    try {
        await hasilPrediksi.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Data has been deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}