
const express = require('express');
const mongoose = require('mongoose')

const server = express();
const mongo_db_url = 'mongodb+srv://Sankwan:captainskinash@cluster0.p3xfl.mongodb.net/todos_db?retryWrites=true&w=majority';

server.get('/todo', function(request, response){
    response.status(200).json('All todos has been granted');
});
server.post('/todo', function(request, response){
    response.status(200).json('All a new todos');
});
server.put('/todo', function(request, response){
    response.status(200).json('All todos have been modifed');
});
server.delete('/todo', function(request, response){
    response.status(200).json('All todos have been deleted');
});

server.listen(4001, function(){
    console.log('Server has started running in express');
})