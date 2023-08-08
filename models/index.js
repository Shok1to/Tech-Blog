const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// Post belongs to Users
Post.belongsTo(User, {
  foreignKey: 'userId'
});

// Posts hasMany Comment
Post.hasMany(User, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// Comment belong to Users
Comment.belongsTo(User, {
    foreignKey: 'userId'
  });

module.exports = { User, Post, Comment };