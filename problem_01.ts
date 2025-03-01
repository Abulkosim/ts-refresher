interface User {
    name: string,
    age: number,
    address: string,
}

function formatUserDetails(user: User): string {
    return `${user.name} ${user.age} ${user.address}`
}

console.log(formatUserDetails({
    name: 'Abulkosim',
    age: 22,
    address: 'Tashkent'
}))