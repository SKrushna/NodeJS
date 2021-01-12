//combination of http and express modules
var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var server = http.createServer(app);

app.get('/',function(req,res){
    res.send('Express Works!');
})

app.get('/tasks', function(req,res){
    //res.send('<h3>Tasks Work!</h3>');
    fs.readFile('./db.json', function(err,data){
        var tasks = JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })
})

server.listen(8080, function(){
    console.log('Server listening to port 8080')
})