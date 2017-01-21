'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    // connection to database
    const options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect(process.env.DB_Test, options, ()=> {
          var collections = mongoose.connection.collections; 
     });
     mongoose.connection.on('connected', function () {
        console.log('Mongoose connection open to ' + process.env.DB_Test);
     });
};