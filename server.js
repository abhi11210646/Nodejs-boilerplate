var express = require('express');
require('dotenv').config();
var app = express();
app.get('/',function(req,res){
    res.send('hello world how r u?');
})
app.listen(process.env.PORT,function(){
    console.log('process listening ON',process.env.PORT);
})