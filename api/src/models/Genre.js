const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

sequelize.define('genre', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
})

}