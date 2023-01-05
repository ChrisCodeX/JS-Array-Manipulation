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
  {
    customerName: "Nico",
    total: 322,
    delivered: false,
  },
];

/* Obtener todos los objetos que en delivered sea true */
const newOrders = orders.filter((item) => item.delivered)
console.log(newOrders)

/* Obtener todos los objetos que en el nombre se incluya el fragmento 'Nico' */
const rta = orders.filter((item) => {
  return item.customerName.includes('Nico')
})
console.log(rta);

/* Hacer una función que dependiendo de la palabra que ingrese, esta debe buscarlo en el array de costumers y retornarme los nombres que coincidan */
function search(query: string) {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  })
}

console.log(search('Nico'));