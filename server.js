var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('hello world');
})
app.listen(20133,function(){
    console.log('listening');
})