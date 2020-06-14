//import packages
const http = require('http');

//custome module 
const routes = require('./routes');


// const server = http.createServer((req,res)=>{
//     console.log(req.url , req.headers , req.method);

   


// });

const server = http.createServer(routes.handeler);


server.listen(3800);

// to check -> http://localhost:3800/

