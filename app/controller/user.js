'use strict';
var userHelper = require('./../helper/user');
module.exports  = {

    getUser: (req, res) => {
        //list all users
     
    },
    updateuser: (req, res) => {
        //update user
        return res.status(200).send({
            success:true,
            data: userHelper.saveUser({name:"yoyo", age:24})
        })
    }

};