const arr: number[] = [1,2,3,4,5,6,7,6,7,9,10,10]

// const rta3 = arr.reduce((obj: {[key: number]: number}, item) => {
//   if (!obj[item]) {
//     obj[item] = 1
//   } else {
//     obj[item] += 1
//   }
//   return obj
// }, {})

// console.log(rta3);
const arr2: number[] = [1,2,3,4,5,6,7,6,7,9,10,10]
const rta4 = arr2.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8){
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
},{
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})
console.log(rta4)

/* Crear un hash map */
const hm: {[key:number]: number} = {
  1: 12,
  2: 3
}

const hm2: {[key: number]: string} = {
  0: 'I',
  1: 'A',
  2: 'F'
}