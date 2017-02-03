'use strict';

var mongoose = require('mongoose');

var postSchema =new  mongoose.Schema({

    title:{
        type:String,
        default: "Default Title"
    },
    body:{
        type:String,
        default: "this is body"
    }

});
var postModel = mongoose.model('Post',postSchema);
module.exports = postModel;