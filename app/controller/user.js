'use strict';
var userHelper = require('./../helper/user');
var response = require('./../../config/response');
module.exports  = {
    getUser: (req, res) => {
        //list all users
        userHelper.getUser().then((user) => {
             return response.ok(res, user);
        });
    },
    updateuser: (req, res) => {
        //update user
         userHelper.saveUser(req.body).then((data)=> {
                return response.ok(res, data);
        });
    },
    deleteuser: (req, res) =>{
        userHelper.deleteUser().then((deleteduser)=>{
            return response.ok(res,deleteduser);
        });
    }

};