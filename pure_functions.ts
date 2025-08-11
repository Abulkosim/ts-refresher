function appendItem<T>(list: T[], item: T): T[] {
  list.push(item);
  console.log(list)
  return list;
}

appendItem([1, 2, 3], 4);
appendItem([1, 2, 3], 4);

function getDiscountedPrice(price: number, discount: number) {
  const taxRate = fetchTaxRateFromAPI(); // async call
  return (price - price * discount) * (1 + taxRate);
}


interface User {
  name: string;
  roles: string[];
}

function addRole(user: User, role: string): User {
  return {
    ...user,
    roles: user.roles.concat(role)
  };
}

const original = { name: "Alice", roles: ["admin"] };
const updated = addRole(original, "editor");

console.log(original.roles); // ???
