export const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts:any[] = [];

/* Eliminar del primer array y agregarlo al segundo */
const products3 = products.slice()
const ind = products3.findIndex(item => item.id === '🍔')
if (ind != -1) {
  myProducts.push(products3[ind])
  products3.splice(ind, 1)
}
console.log("First:", myProducts)

/* New array with that element */
const pr = products.find((item) => item.id === '🥞')
if (pr) {
  myProducts.push(pr)
}
console.log(myProducts)

const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: 'delicious'
  }
};

/* Colocar el update */
const productIndex = products2.findIndex((item) => item.id === update.id)
if (productIndex != -1) {
  products2[productIndex] = {
    ...products2[productIndex],
    ...update.changes
  }
}

console.log(products2)
