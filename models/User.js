const { DataTypes } = require("sequelize");
const mysqlConfig = require("../config/mysqlConfig");

// Definición del modelo de Usuario
const User = mysqlConfig.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = User;
