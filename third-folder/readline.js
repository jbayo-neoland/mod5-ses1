const chalk = require('chalk');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = () => {
  return new Promise((resolve, reject) => {
    readline.question('How are you? ', (message) => {
      resolve(message);
    })
  })
}


const main = async () => {
  try {
    let input1 = await question();
    console.log(`Input1 is ${chalk.blue(input1)}`)
  } catch (e) {
    console.log(chalk.red(e));
  }

  readline.close();
}

main();
