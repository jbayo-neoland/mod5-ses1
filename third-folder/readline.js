const chalk = require('chalk');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => {
  return new Promise((resolve, reject) => {
    readline.question(query, (message) => {
      resolve(message);
    })
  })
}


const main = async () => {
  try {
    let input1 = await question('First number: ');
    let input2 = await question('Second number: ');
    console.log(`Input1 is ${chalk.blue(input1)}`)
    console.log(`Input2 is ${chalk.blue(input2)}`)
    console.log('And the result is...');
    // todo: progressbar
    setTimeout(() => {
      console.log(`${parseInt(input1) * parseInt(input2)}`)
    }, 1300);
  } catch (e) {
    console.log(chalk.red(e));
  }

  readline.close();
}

main();
