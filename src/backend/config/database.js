var mysql = require("mysql");

var pool = mysql.createPool({
  host: "194.59.164.106",
  user: "u575067108_frs",
  password: "656LV/mjs?hV",
  database: "u575067108_frs",
});

module.exports = pool;
