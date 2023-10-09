'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      publisher.hasMany(models.game, {
        foreignKey: 'publisherId'
      })
    }
  }
  publisher.init({
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
    modelName: 'publisher',
  });
  return publisher;
};