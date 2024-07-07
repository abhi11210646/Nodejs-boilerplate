'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// module.exports = () => {
const options = {
    keepAlive: 1000,
    useNewUrlParser: true,
    useCreateIndex: true
};
const DB_URL = process.env.DB_URL; 
mongoose.connect(DB_URL, options, (err, _) => {
    if (err) console.log('Mongoose connection error', err.message);
});
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected');
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error'));

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
// };
