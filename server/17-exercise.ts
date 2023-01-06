export const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]

const rta = input.flatMap((item) => {
  return item.split(' ')
}).length
console.log(rta);