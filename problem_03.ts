// generic groupBy
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Keyboard', category: 'Electronics', price: 29.99 },
    { id: 2, name: 'Bananas', category: 'Grocery', price: 1.99 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 59.99 },
    { id: 4, name: 'Apples', category: 'Grocery', price: 2.49 },
    { id: 5, name: 'T-Shirt', category: 'Clothing', price: 9.99 },
];

function groupBy<T, K extends keyof T>(
    items: T[],
    key: K
  ): Record<Extract<T[K], PropertyKey>, T[]> {
    return items.reduce((result, item) => {
      const groupKey = item[key] as Extract<T[K], PropertyKey>;
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    }, {} as Record<Extract<T[K], PropertyKey>, T[]>);
  }
  

const groupedByCategory = groupBy(products, 'category');
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