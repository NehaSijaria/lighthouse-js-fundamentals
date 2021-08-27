const request = require('request');

const breedName = process.argv[2];
let domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(domain, (error, response, body) => {

  if (error) {
    console.log('Error: ', error);
    // return;
  }
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0].description);
});