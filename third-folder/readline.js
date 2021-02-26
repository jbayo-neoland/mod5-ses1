const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = () => {
  return new Promise((resolve, reject) => {
    readline.question('How are you? ', (message) => {
      console.log(`you are ${message}`);
      console.log('bye');
      resolve(message);
      readline.close();
    })
  })
}
