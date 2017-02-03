'use strict';


require('dotenv').config();
var express = require('express');
var parser = require('body-parser');
var app = express();

// setup db connection, initialize router on init
const db = require('./config/db')();
app.use(parser.json());
require('./app/model/user');
require('./app/model/post');
const router = require('./config/route')(app);
//listen on particular port
app.listen(process.env.PORT,function(){
    console.log('process listening ON',process.env.PORT);
})