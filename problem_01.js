function formatUserDetails(user) {
    return "".concat(user.name, " ").concat(user.age, " ").concat(user.address);
}
console.log(formatUserDetails({
    name: 'Abulkosim',
    age: 22,
    address: 'Tashkent'
}));
