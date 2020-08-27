console.log('outer');

setImmediate(() => {
    console.log('setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

