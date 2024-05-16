const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_USER, NAME_DB, DB_HOST, DB_PASSWORD } = process.env;

// Configuración de Sequelize
const mysqlConfig = new Sequelize(NAME_DB, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});
module.exports = mysqlConfig;
