const maxArrayLen = 20;
const maxArrayNumber = 100;
const thisArrayLen = Math.floor(Math.random() * maxArrayLen);

let thisArray = [];
for(let i=0; i < thisArrayLen; i++)
  thisArray.push(thisArrayLen % 2 ? Math.floor(Math.random() * maxArrayNumber) : thisArrayLen);
console.log(`Массив из ${ thisArray.length } значений`);
console.log(thisArray.filter( (item) => item === thisArray[0]).length === thisArray.length ? 'Массив из полностью одинаковых элементов' : 'Массив из разных элементов');