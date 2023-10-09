'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class platform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      platform.belongsToMany(models.game, {through: models.gamePlatform})
    }
  }
  platform.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Please enter the name'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'platform',
  });
  return platform;
};