const number = [1,3,2,3]

// const newObj = number.reduce((obj, item) => {
//   if (item === 1) {
//     obj[1] = obj[1] + 1
//   }
//   if (item === 2) {
//     obj[2] = obj[2] + 1
//   }
//   if (item === 3) {
//     obj[3] = obj[3] + 1
//   }
//   return obj
// },{
//   1: 0,
//   2: 0,
//   3: 0
// })


const newObj = number.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1
  } else {
    obj[item] += 1
  }
  return obj
}, {});

console.log(newObj)

const obj2 = {
  name: 'christ',
  price: 121
}

console.log(obj2['name'])

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data.map((item) => item.level).reduce((obj, item) => {
  if(!obj[item]) {
    obj[item] = 1
  } else {
    obj[item] += 1
  }
  return obj
},{})
console.log(rta2);
