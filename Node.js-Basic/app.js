//import packages
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.headers , req.method);

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body> This is a response </body>');
    res.write('</html>');

    //end -DONT WRITE AFTER  res.end();
    res.end();

    

});


server.listen(3800);

// to check -> http://localhost:3800/

