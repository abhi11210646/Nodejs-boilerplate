'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    // connection to database
   let options = {
            ha: true, // Make sure the high availability checks are on
            haInterval: 5000, // Run every 5 seconds
            socketOptions : {
                keepAlive: 1
             }
            };
    mongoose.connect(process.env.DB_Test, options, ()=> {
          var collections = mongoose.connection.collections; 
     });
     mongoose.connection.on('connected', function () {
        console.log('Mongoose connection open to ' + process.env.DB_Test);
     });
};