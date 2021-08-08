const DataTypes = require('sequelize').DataTypes;
const sequelize = require('../db.config');
module.exports = () => {
  return sequelize.define('workspaces', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subDomain: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    paranoid: true,
  })
}
