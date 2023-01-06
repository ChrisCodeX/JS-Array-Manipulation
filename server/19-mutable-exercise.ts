export const products = [
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

const newArr = products.slice()
const ind = newArr.findIndex(item => item.id === update.id)
if (ind != -1) {
  const newPro = {
    ...newArr[ind],
    ...update.changes
  }
  newArr.splice(ind, 1)
  newArr.push(newPro)
}
console.log('original', products)
console.log('after', newArr)