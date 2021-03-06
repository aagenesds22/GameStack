const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

};
