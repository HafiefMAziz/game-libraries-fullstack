'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game.belongsToMany(models.genre, {through: models.gameGenre})
      game.belongsToMany(models.platform, {through: models.gamePlatform})
      game.belongsTo(models.publisher)
    }
  }
  game.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Please enter the title'
        }
      }
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: {
          message: 'Please enter valid URL'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Please enter the title'
        }
      }
    },
    yearRelease: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          message: 'Please enter the year of release'
        }
      }
    },
    publisherId: {
      type: DataTypes.INTEGER,
      allowNull: null,
    }
  }, {
    hooks: {
      beforeCreate: (game, options) => {
        game.imageUrl = game.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
      }
    },
    sequelize,
    modelName: 'game',
  });
  return game;
};