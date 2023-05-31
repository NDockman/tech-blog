const { Post, Comment, User } = require("../models");

const postData = require("./post-seeds");
const commentData = require("./comment-seeds");
const userData = require("./user-seeds");

const sequelize = require('../config/connection');



const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);
    

    process.exit(0);
}

//const seedPosts = () => Post.bulkCreate(postData);



seedDatabase();