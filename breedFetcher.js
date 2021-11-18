const request = require('request'); 
const args = process.argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`; 
//console.log(args) // command line in string form 
request(url, (error, response, body) => {
//console.log('error =', error)
if(error) {
  console.log(`Error HTTP ${error.message}`);
  return;
}

const data = JSON.parse(body);

if(data.length === 0) {
  console.log('Breed not found');
  return;
  // data = [] when breed is not found 
}

console.log(data[0].description)

})

