export const arr: string[] = ['cat','dog','bat']

const rta = arr.includes('cat');
console.log(rta);

const rta2 = arr.some((item) => item === 'cat')
console.log(rta2)
