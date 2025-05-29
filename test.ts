function test(a: number, b: number, cb: (x: number) => number): number {
  return cb(a + b);
}

test(1, 2, (x) => x * x);