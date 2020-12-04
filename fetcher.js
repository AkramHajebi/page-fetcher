const request = require('request');
const fs = require('fs');


var myArgs = process.argv.slice(2);  //  process.argv is used to make simple Command-Line Interface   https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const url = myArgs[0];        // first argument got from sell : 'http://www.example.edu/';
const fileName = myArgs[1];   // contain ./index.html


request(url, (err, response, body) => {

  if (err) throw err;
  

  fs.writeFile(fileName, body, 'utf8', (err) => {     // save the file in the given path
    if (err) throw err;
   });

   var iFileSize = body.length;  // get size of the body
   //console.log(iFileSize);
   console.log(`Downloaded and saved ${iFileSize} bytes to ${ myArgs[1] }`);
   
 });





