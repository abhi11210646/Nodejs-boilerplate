'use strict';
var posthelper = require('./../helper/post');
var response = require('./../../config/response');
module.exports = {

    addPost: (req, res) => {
        posthelper.addPost(req.body).then((data) => {
            return response.ok(res, data);
        }).catch((err)=>{
                console.log("dil ka pemaana", err);
        });
    },
    getPost: (req, res) => {
        posthelper.getPost().then((data) => {
            return response.ok(res, data);
        }).catch((err)=>{
                console.log("dil ka pemaana", err);
        });
    }

}
