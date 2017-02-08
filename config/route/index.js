'use strict';
module.exports = (app, passport) => {
    //register router  // return all routers \/
    app.use('/api', require('./route_v1')(passport));
}