const http = require ('http');

const server = http.createServer(function(request, response){
console.log(request.url);

if(request,method==='POST' && request.url=== '/tasks'){
    response.end('You just made a POST to add a tasks')
}else if(request.method==='GET' && request.url=== '/tasks'){
    response.end('You just made a GET to get all tasks')
}else if(request.method ==='PUT' && request.url === 'tasks'){
    response.end('You just made a PUT to modify the todo')
}else if (request.method ==='DELETE' && request.url === '/tasks')
    response.end('You just made a DELETE to delete the tasks')
    else{
        response.end('thsis code does not exist')
    }
}
);

server.listen(4001, function(){
    console.log('Server has started to run');
});