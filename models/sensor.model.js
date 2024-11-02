const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Capteur = sequelize.define('Capteur', {
  idCapteur: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type_capteur: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'capteur'
});

module.exports = Capteur;
