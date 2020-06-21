const fs = require('fs');


const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body><form method="POST" action="/message"> <input type="text" name="myMessage"/><input type="submit" value="POST"> </form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
    
    
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
            
        });
        return req.on('end',()=>{
      
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1]
            //fs.writeFileSync('message.txt',`This is POST message ${msg}`);
            /*
                writeFileSync vs writeFile
    
                writeFileSync :- Block the code until file is done.
                writeFile :- not wait from done 
            */
           fs.writeFile('message.txt',`This is POST message ${msg}`,err=>{
               //this part only execute when the file process is done 
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
           });
    
           //this called event driven architecture : never block the code 
           
    
        });
    
     
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body> This is a response </body>');
    res.write('</html>');
    
    //end -DONT WRITE AFTER  res.end();
    res.end();
}

module.exports = {
    handeler : requestHandler
};

