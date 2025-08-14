
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      }
    }
  }
}

const greet = (a, b) => `${a}, ${b}!`
const curriedGreet = curry(greet);
console.log(curriedGreet("WHAT UP")("Alice"))