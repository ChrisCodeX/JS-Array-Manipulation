import {areIntervalsOverlapping} from 'date-fns'

export const arr = [1,2,3,4,5]

let rta = false;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (element%2 === 0) {
    rta = true
    break
  }
}
console.log(rta);

const rta2 = arr.some((item) => item%2 === 0)
console.log(rta2);

interface obj {
  customerName: string,
  total: number,
  delivered: boolean
}
export const orders:obj[] = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nico",
    total: 322,
    delivered: false,
  },
];

const rta3 = orders.some((item) => item.delivered);
console.log(rta3);

/* Ejemplo con fechas */
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newDate = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

function isOverleap(newDate: {
  startDate: Date,
  endDate: Date
}) {
  return dates.some(date => {
    return areIntervalsOverlapping({start: date.startDate, end: date.endDate},{start: newDate.startDate, end: newDate.endDate})
  })
}

console.log(isOverleap(newDate))