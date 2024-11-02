const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Utilisateur = require('./user.model');

const Alerte = sequelize.define('Alerte', {
  idAlerte: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type_alerte: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horodatage: {
    type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'alerte'
});

// Définition de la relation
Utilisateur.hasMany(Alerte, { foreignKey: 'utilisateur_id' });
Alerte.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id' });

module.exports = Alerte;
