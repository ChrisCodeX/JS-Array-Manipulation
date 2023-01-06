export const arr = [10, 11, 49, 34, 23];

const ev = arr.every((item) => item <= 50) // Output: true
const ev2 = arr.every((item) => item <= 40) // Output: false

/* Ejemplo 2 */
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta = team.every((item) => item.age >= 18); // Output false
console.log(rta)