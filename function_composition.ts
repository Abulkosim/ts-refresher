export const compose =
  <T>(...fns: Array<(arg: T) => T>) =>
    (x: T) =>
      fns.reduceRight((v, f) => f(v), x);

export const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
    (x: T) =>
      fns.reduce((v, f) => f(v), x);


const slugify = pipe(trim, toLower, spacesToHyphens);

console.log(slugify("   Hello World   ")); // "hello-world"
