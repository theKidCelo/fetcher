const args = process.argv.slice(2, 4);
const fs = require('fs')
const request = require('request');


request(args[0], (error, response, body) => {

  console.log('statusCode:', response && response.statusCode);
  
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(error)
      return
    }
    //file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
  })

}); 