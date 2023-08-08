const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // define columns
    body:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  },
  {
    sequelize
  }
);

module.exports = Comment;