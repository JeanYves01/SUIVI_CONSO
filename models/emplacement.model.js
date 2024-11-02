const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Emplacement = sequelize.define('Emplacement', {
  idEmplacement: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capteur_idCapteur: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'emplacement'
});

module.exports = Emplacement;
