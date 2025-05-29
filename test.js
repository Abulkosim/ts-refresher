function test(a, b, cb) {
    return cb(a + b);
}
test(1, 2, function (x) {
    console.log(x * x);
    return x * x;
});
