export const elements = [1,1,2,2]
const otherElements = [3,3,4,4]

/* For mode */
// const newArray = elements.slice();
// for (let index = 0; index < otherElements.length; index++) {
//   const element = otherElements[index];
//   newArray.push(element)
// }

// console.log(elements)

/* Spread operator mode */
// elements.push(...otherElements);
// console.log(elements);

/* New array with concat */
const rta = elements.concat(otherElements);
console.log(rta);