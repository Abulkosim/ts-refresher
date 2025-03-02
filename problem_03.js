// generic groupBy
function groupBy(items, key) {
    var groupedObj = {};
    items.forEach(function (item) { return item[key]; });
}
var products = [
    { id: 1, name: 'Keyboard', category: 'Electronics', price: 29.99 },
    { id: 2, name: 'Bananas', category: 'Grocery', price: 1.99 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 59.99 },
    { id: 4, name: 'Apples', category: 'Grocery', price: 2.49 },
    { id: 5, name: 'T-Shirt', category: 'Clothing', price: 9.99 },
];
var groupedByCategory = groupBy(products, 'category');
/*
Expected shape could be:
{
  Electronics: [
    { id: 1, name: 'Keyboard', category: 'Electronics', price: 29.99 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 59.99 }
  ],
  Grocery: [
    { id: 2, name: 'Bananas', category: 'Grocery', price: 1.99 },
    { id: 4, name: 'Apples', category: 'Grocery', price: 2.49 }
  ],
  Clothing: [
    { id: 5, name: 'T-Shirt', category: 'Clothing', price: 9.99 },
  ]
}
*/
console.log(groupedByCategory);
