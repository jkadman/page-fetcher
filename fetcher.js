// need process argv and it takes two commands a url and a local path to a file
// should print out: Downloaded and saved 1235 bytes to ./index.html.
// should download information from a url (example.edu) to a local file path

const fs = require('fs');

// const content = 'Some content!';

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('../page-fetcher/test.txt', 'http://www.example.edu', err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});