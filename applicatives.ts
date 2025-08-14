// Functor mapping
[1, 2, 3].map(x => x * 2) // [2, 4, 6]

// Applicative application
const funcs = [x => x * 2, x => x + 1]
const values = [1, 2, 3]

const applied = funcs.flatMap(f => values.map(f))
console.log(applied)
// [2, 4, 6, 2, 3, 4]
