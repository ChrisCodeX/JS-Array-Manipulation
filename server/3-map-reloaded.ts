export const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const newOrders = orders.map((item) => {
  return {
    ...item,
    tax: 0.19
  }
})

console.log(newOrders);
console.log(orders);

function filterBy(array, term) {
  return array.filter((item) => item.includes(term))
}

const rta4 = filterBy(["ana","santi","nico","anastasia"],'ana')
console.log(rta4)