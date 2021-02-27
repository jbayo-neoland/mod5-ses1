const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('done', (name) => {
  console.log(`I am done ${name}`);
})

console.log(`Are you done?`);
setTimeout(() => {
  eventEmitter.emit('done', 'Peter');

}, 1220)
