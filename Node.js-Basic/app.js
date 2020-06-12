//import packages
/*
    you can import your packages too : require(./relative-path ) :- .js not required in the end i will automaticaly added by node
*/
const http = require('http');

// function requestListener(req,res){}
// http.createServer(requestListener)

//--- create a server using event driven architecture 

// (ES5)
// http.createServer(function(req,res){

// });

// (ES6)
const server = http.createServer((req,res)=>{
    console.log(req);

    //exit the event loop
    /*
        exit event loop likes a we destroy the whole nodejs process. 
        DONT DO THIS -just learn :D
    */
    process.exit()
});

//keep this running and listen to the income req -> .listen()
server.listen(3800);
// to check -> http://localhost:3800/

/*
    Server was created -D
*/