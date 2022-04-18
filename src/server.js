const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data_dna"
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

const app = express();

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE data_dna';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

//Create table
app.get('/createjenispenyakittable', (req, res) => {
    let sql = 'CREATE TABLE jenisPenyakit(namaPenyakit VARCHAR(255), rantaiDNA VARCHAR(255),PRIMARY KEY(namaPenyakit))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table jenisPenyakit created...');
    });
});

//Create table 2
app.get('/createhasilprediksitable', (req, res) => {
    let sql = 'CREATE TABLE hasilPrediksi(namaPasien VARCHAR(255), tanggalPrediksi DATE, penyakitPrediksi VARCHAR(255), status VARCHAR(255),PRIMARY KEY(namaPasien, tanggalPrediksi))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table hasilPrediksi created...');
    });
});

//Insert value table
app.get('/addtojenispenyakit', (req, res) => {
    let sql = "INSERT INTO jenisPenyakit (namaPenyakit,rantaiDNA) VALUES ?";
    let values = [
        ['HIV', 'ACTGATCTG'],
        ['Hepatitis B', 'ACTGATCTT'],
        ['Hepatitis C', 'ACTGATCZG']
    ];

    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Values added...');
    });
});

app.get('/addtohasilprediksi', (req, res) => {
    let sql = "INSERT INTO hasilPrediksi (namaPasien,tanggalPrediksi,penyakitPrediksi,status) VALUES ?";
    let values = [
        ['FRS', '2019-01-01', 'HIV', 'True'],
        ['lovi', '2019-01-02', 'Hepatitis B', 'True'],
    ];

    db.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Values added...');
    });
});

//display jenis penyakit
app.get('/jenispenyakit', (req, res) => {
    let sql = 'SELECT * FROM jenisPenyakit';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
});

//display hasil prediksi
app.get('/hasilprediksi', (req, res) => {
    let sql = 'SELECT * FROM hasilPrediksi';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
});

app.listen('3000', () => {
    console.log('Server started on port 3000...')
});