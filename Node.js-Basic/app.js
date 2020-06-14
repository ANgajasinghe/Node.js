//import packages
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.headers , req.method);

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body><form method="POST" action="/message"> <input type="text" name="myMessage"/><input type="submit" value="POST"> </form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {

        /*
            when we uploading something node will divide that message as chunks as that 
            we cannot access all the data at the same time because 
            some time some data not receive ai the point.
            so we used Buffer to that.
            Buffer likes a bus.
            
            ===============Access POST data ===================

            The node used EventLisners to access data from POST req


        */

        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
            
        });
        req.on('end',()=>{
            //bus is stopped.
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt',`This is POST message ${msg}`);

        });



        

        // res.setHeader('Content-Type','text/html');
        // res.write('<html>');
        // res.write('<body> <h1> This is a response message </h1> </body>');
        // res.write('</html>');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body> This is a response </body>');
    res.write('</html>');

    //end -DONT WRITE AFTER  res.end();
    res.end();

    

});


server.listen(3800);

// to check -> http://localhost:3800/

