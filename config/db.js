'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
module.exports = () => {
    // connection to database
     let options = {
            socketOptions : {
                keepAlive: 1000
             }
            };
    mongoose.connect(process.env.DB_Test, options, ()=> {
          var collections = mongoose.connection.collections; 
     });
     mongoose.connection.on('connected', function () {
        console.log('Mongoose connection open to ' + process.env.DB_Test);
     });
     mongoose.connection.on('error', console.error.bind(console,'MongoDb connection error'));
};