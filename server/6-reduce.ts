export const numbers = [1,2,3,4,5,6];

const rta = numbers.reduce((sum, item) => {
  return sum + item
}, 10)

console.log(rta);
console.log(numbers);