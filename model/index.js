const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: Sequelize.DOUBLE,
  description: {
    type: Sequelize.STRING,
   // allowNull: false
  },
  category: {
    type: Sequelize.STRING,
   // allowNull: false
  },
});

module.exports = User;
