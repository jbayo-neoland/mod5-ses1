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
    const progress = require('progressbar').create().step('the task you are currently performing')
    // use an array of steps that execute one second after each other
    // as if we do them all instantly
    // you won't see the progress bar as it will be instant
    ;[
        () => progress.setTotal(5),
        () => progress.setTick(1),
        () => progress.setTick(2),
        () => progress.setTick(3),
        () => progress.addTick(),
        () => progress.addTick(),
        () => progress.finish(() => {
          console.log(`${parseInt(input1) * parseInt(input2)}`)
        })  // remove and destroy the progress bar
    ].forEach(function (step, index) {
        setTimeout(step, index * 1000)
    })
  } catch (e) {
    console.log(chalk.red(e));
  }

  readline.close();
}

main();
