export const arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11],[12,13],
  [[14,[15,16]]]
],
]

const rta = arr.flat(4);
console.log(rta);

/* For mode - Recursion */
function deep(list: any[]) {
  let newArr: number[] = [];
  if (typeof list != "object") {
    return [list]
  }
  list.forEach((element) => {
    newArr = newArr.concat(deep(element));
  })
  return newArr
}

console.log(deep(arr))
