const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoPais: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM('archivista', 'admin', 'master'),
    defaultValue: 'archivista',
  },
  isBlocked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'usuarios',
  timestamps: false, // Si no tienes campos de tiempo como createdAt, updatedAt
});

module.exports = Usuario;
