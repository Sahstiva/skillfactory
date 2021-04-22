const maxArrayLen = 20;
const maxArrayNumber = 100;
const thisArrayLen = Math.floor(Math.random() * maxArrayLen);

let thisArray = [];
for(let i=0; i < thisArrayLen; i++)
  thisArray.push(Math.floor(Math.random() * maxArrayNumber));
console.log(`Массив из ${ thisArray.length } значений`);
thisArray.forEach( (item, index) => console.log(`${index+1}-й элемент массива равен ${item}`));