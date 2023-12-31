'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: DataTypes.STRING,
    level: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks : {
      beforeCreate: function(user ,options){
        user.password = encryptPwd(user.password)
        user.level = user.level || 'user' 
      },
     
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};