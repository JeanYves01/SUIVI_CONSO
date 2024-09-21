const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nomComplet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // numCompt: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // }
}, {
  tableName: 'users'
});

module.exports = User;
