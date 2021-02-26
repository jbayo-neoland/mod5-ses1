const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


readline.question('How are you? ', (message) => {
  console.log(`you are ${message}`);
  console.log('bye');
  readline.close();
})
