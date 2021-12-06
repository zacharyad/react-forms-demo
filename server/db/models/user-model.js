const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  name: Sequelize.STRING,
  job: Sequelize.STRING,
  favoriteFood: Sequelize.STRING,
});

module.exports = User;
