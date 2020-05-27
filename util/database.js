const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-learn', 'root', 'Optix@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
