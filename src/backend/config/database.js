import { Sequelize } from "sequelize";
const db = new Sequelize('db_dna', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});

export default db;