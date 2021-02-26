
const chalk = require('chalk');

const hi = 'hi';
// process.nextTick(() => {
//   console.log(`say ${hi}`);
// });
console.log(hi);
console.log('bye');


console.log(process.pid);



// end process with process.exit
for(let i = 0; i <= 10 ;i++) {
  console.log(i);
  if (i === 5) {
    console.clear();
  }
}
console.log(chalk.green(process.argv[2]));
console.log(process.env.NODE_ENV);

const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23
      }
    }
  }
}

console.log(JSON.stringify(obj, null, 2));
