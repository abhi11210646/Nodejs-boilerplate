'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {

    
    getUser:()=> {
    User.find({}).then((user)=>{
          return res.status(200).send({
            success:true,
            data: user
        });
    });
    },
    saveUser:(data)=> {
        let user = new User();
        return  user.save();
    }

};