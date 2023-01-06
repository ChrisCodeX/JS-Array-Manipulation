export const arr = [1,2,3,4,5]

const rta = arr.join('-') //output: 1-2-3-4-5
console.log(rta);

/* Convertir un string a una url */
const word = 'arrays manipulation course'
const rta2 = word.toLowerCase().split(' ').join('-')
console.log(rta2);