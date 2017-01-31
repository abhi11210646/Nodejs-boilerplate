'use strict';
module.exports = (app) => {
    //register router  // return all routers \/
    app.use('/api', require('./route_v1')());
}