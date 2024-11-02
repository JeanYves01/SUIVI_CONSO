const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Capteur = require('./sensor.model');
const Utilisateur = require('./user.model');

const Consommation = sequelize.define('Consommation', {
  idConso: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  val_conso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horodatage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capteur_idCapteur: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Capteur,
      key: 'idCapteur'
    }
  },
  utilisateur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: 'id'
    }
  }
}, {
  tableName: 'consommation'
});

// Définition des relations
Capteur.hasMany(Consommation, { foreignKey: 'capteur_idCapteur' });
Consommation.belongsTo(Capteur, { foreignKey: 'capteur_idCapteur' });

Utilisateur.hasMany(Consommation, { foreignKey: 'utilisateur_id' });
Consommation.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

module.exports = Consommation;
