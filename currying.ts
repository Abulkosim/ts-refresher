
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

const mult = (a, b) => a * b;
const curriedMult = curry(mult);
console.log(curriedMult(2)(10));