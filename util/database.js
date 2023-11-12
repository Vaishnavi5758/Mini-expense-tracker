const Sequelize = require('sequelize');

const sequelize = new Sequelize('Mini-Expense', 'root', 'Suyogniwas57@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
