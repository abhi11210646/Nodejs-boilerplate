'use strict';
var userHelper = require('./../helper/user');
module.exports  = {
    getUser: (req, res) => {
        //list all users
        userHelper.getUser().then((user) => {
             return res.status(200).send({
                success:true,
                data: user
            });
        });
    },
    updateuser: (req, res) => {
        //update user
         userHelper.saveUser({'name': 'yoyo', 'age': 24}).then((user)=> {
                return res.status(200).send({
                    success:true,
                    message: 'Saved Successfully',
                    data: user
                });
        });
    }

};