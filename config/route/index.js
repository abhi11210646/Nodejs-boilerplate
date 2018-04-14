'use strict';
module.exports = (app, passport) => {
    app.use('/api', require('./route_v1')(passport));
    app.get('/', (req, res) => res.status(200).json({ status: "OK" }));
};
