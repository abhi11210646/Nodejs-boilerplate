'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = (config) => {
    const options = {
        socketOptions: {
            keepAlive: 1000
        }
    };
    mongoose.connect(config.db, options, () => {
        // var collections = mongoose.connection.collections;
    });
    mongoose.connection.on('connected', function() {
        console.log('Mongoose connection');
    });
    mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error'));
};
