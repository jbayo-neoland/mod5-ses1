const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('done', (name) => {
  console.log(`I am done ${name}`);
})

exports.customEventEmitter = eventEmitter;
