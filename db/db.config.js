const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize(process.env.POSTGRES_DB,
  process.env.POSTGRES_USERNAME,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    // username: process.env.POSTGRES_USERNAME,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    logging: false
  })

module.exports = sequelize;

sequelize.authenticate().then(() => console.log('Connected')).catch(err => {
  throw new err
});
sequelize.sync({
  force: true
}).then()

const { userModel, workSpaceModel } = require('./models')

const user = userModel;
const workspace = workSpaceModel;

/**
 * Model Associations
 */

user.hasMany(workspace, { foreignKey: 'userId', as: 'workspace' });
workspace.belongsTo(user);


