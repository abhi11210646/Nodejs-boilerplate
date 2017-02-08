'use strict';


require('dotenv').config();
var express = require('express');
var app = express();
var passport = require('passport');
var parser = require('body-parser');
require('./app/model/user');
require('./app/model/post');
var local_ = require('./config/passport/local');
const router = require('./config/route')(app, passport);
console.log("menu kehndi==========>>>>>>>>>>>>",local_);
// setup db connection, initialize router on init
const db = require('./config/db')();
app.use(parser.json());
app.use(passport.initialize());
passport.use(local_);
//listen on particular port
app.listen(process.env.PORT,function(){
    console.log('process listening ON', process.env.PORT);
})