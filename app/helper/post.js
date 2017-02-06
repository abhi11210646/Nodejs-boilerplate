'use strict';
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = {

    addPost: (data) => {
        let post = new Post(data);
        return post.save();
    },
    getPost: () => {
        console.log("get post helper");
        return Post.find({});
    }

}