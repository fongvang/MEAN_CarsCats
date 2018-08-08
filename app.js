// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:

//  -------------Index route------------
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // call for images
    else if(request.url === '/images/300zx.jpg') {
        fs.readFile('./images/300zx.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // images call
    else if(request.url === '/images/cat.jpg') {
        fs.readFile('./images/cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }


    else if(request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");