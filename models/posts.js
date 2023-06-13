const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username: String,
    title: String,
    description: String,
    time: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Number,
        default: 0
    },
    num_of_comments: {
        type: Number,
        default: 0
    }
});

const Post = mongoose.model('Post', postSchema)

module.exports = Post