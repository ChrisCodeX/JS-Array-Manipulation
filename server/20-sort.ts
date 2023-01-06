/* Por defecto el método sort muta el array y lo ordena de acuerdo al código ASCII */
// String -> alfabeticamente
// Number -> ascii

const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
// Ordenar de mayor a menor
numbers.sort((a,b) => b-a)
console.log(numbers);

// Ordernar de menor a mayor
numbers.sort((a,b) => a-b)
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
// Ordenar alfabeticamente
words.sort()
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

// Ordenar en descendentemente de acuerdo al total
orders.sort((a,b) => b.total - a.total)
console.log(orders)