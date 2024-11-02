const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Emplacement = require('./emplacement.model');
const Utilisateur = require('./user.model');

const EmplacementHasUtilisateur = sequelize.define('EmplacementHasUtilisateur', {
  Emplacement_idEmplacement: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Emplacement,
      key: 'idEmplacement'
    }
  },
  Utilisateur_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Utilisateur,
      key: 'id'
    }
  }
}, {
  tableName: 'emplacement_has_utilisateur'
});

// Définition de la relation Many-to-Many
Emplacement.belongsToMany(Utilisateur, { through: EmplacementHasUtilisateur, foreignKey: 'Emplacement_idEmplacement' });
Utilisateur.belongsToMany(Emplacement, { through: EmplacementHasUtilisateur, foreignKey: 'Utilisateur_id' });

module.exports = EmplacementHasUtilisateur;
