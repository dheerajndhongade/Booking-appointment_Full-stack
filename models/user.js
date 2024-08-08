let Sequelize = require("sequelize");

let sequelize = require("../util/database");

let User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phonenumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
