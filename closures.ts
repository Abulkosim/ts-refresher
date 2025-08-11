function makeMultiplier(multiplier: number) {
  return (value: number) => value * multiplier;
}

const double = makeMultiplier(2);
console.log(double(5)); // 10

function makeRangeChecker(min: number, max: number) {
  return (value: number) => {
    return (value >= min && value <= max)
  }
} 

const isTeen = makeRangeChecker(13, 19);
console.log(isTeen(15)); // true
console.log(isTeen(22)); // false

// getbalance
function createBankAccount(num: number) {
    return {
        getBalance: () => num,
        deposit: (depositValue: number) => {
            num += depositValue;
            return num;
        }
    }
}

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150

function memoize(fn: Function) {
  const cache: Record<string, any> = {};
  return (...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
