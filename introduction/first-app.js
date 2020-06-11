var fs = require('fs');

//this culd not do in the browser ..
fs.writeFileSync('newFileFromNode.txt','hello this is a data from node js file system');


console.log('hello node js');