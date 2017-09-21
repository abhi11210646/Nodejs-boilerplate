'use strict';
module.exports = (app, passport) => {
    app.use('/api', require('./route_v1')(passport));
};