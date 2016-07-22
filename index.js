const Benchmark = require('benchmark');

function newSuite (name) {
  return new Benchmark.Suite(name, {
    onStart: () => console.log(`\n\n${name}`),
    onCycle: event => console.log(String(event.target)),
    onComplete: function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    }
  });
}

const emptyAdd1 = newSuite('add 1');
let emptyAdd1BaseA = [];
let emptyAdd1BaseB = [];
let emptyAdd1BaseC = [];
const emptyAdd1ToAppend = Array(1).fill('a');

emptyAdd1.add('concat', () => {
  emptyAdd1BaseA = emptyAdd1BaseA.concat(emptyAdd1ToAppend);
});
emptyAdd1.add('prototype push', () => {
  Array.prototype.push.apply(emptyAdd1BaseB, emptyAdd1ToAppend);
});
emptyAdd1.add('es6 spread', () => {
  emptyAdd1BaseC.push(...emptyAdd1ToAppend);
});
emptyAdd1.run({ async: false });



const emptyAdd5 = newSuite('add 5');
let emptyAdd5BaseA = [];
let emptyAdd5BaseB = [];
let emptyAdd5BaseC = [];
const emptyAdd5ToAppend = Array(5).fill('a');

emptyAdd5.add('concat', () => {
  emptyAdd5BaseA = emptyAdd5BaseA.concat(emptyAdd5ToAppend);
});
emptyAdd5.add('prototype push', () => {
  Array.prototype.push.apply(emptyAdd5BaseB, emptyAdd5ToAppend);
});
emptyAdd5.add('es6 spread', () => {
  emptyAdd5BaseC.push(...emptyAdd5ToAppend);
});
emptyAdd5.run({ async: false });




const emptyAdd10 = newSuite('add 10');
let emptyAdd10BaseA = [];
let emptyAdd10BaseB = [];
let emptyAdd10BaseC = [];
const emptyAdd10ToAppend = Array(10).fill('a');

emptyAdd10.add('concat', () => {
  emptyAdd10BaseA = emptyAdd10BaseA.concat(emptyAdd10ToAppend);
});
emptyAdd10.add('prototype push', () => {
  Array.prototype.push.apply(emptyAdd10BaseB, emptyAdd10ToAppend);
});
emptyAdd10.add('es6 spread', () => {
  emptyAdd10BaseC.push(...emptyAdd10ToAppend);
});
emptyAdd10.run({ async: false });

