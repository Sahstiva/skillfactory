const maxArrayLen = 20;
const maxArrayNumber = 100;
const thisArrayLen = Math.floor(Math.random() * maxArrayLen);

let thisArray = [];
for(let i=0; i < thisArrayLen; i++)
  thisArray.push(i % 5 ? Math.floor(Math.random() * maxArrayNumber) : null);
console.log(`Массив из ${thisArray.length} элементов`, thisArray);
console.log("Нечётных элементов: ", thisArray.reduce( (result, item) => result = item % 2 && item !== null ? ++result : result,0));
console.log("Чётных элементов: ", thisArray.reduce( (result, item) => result = item % 2 ? result : item != null ? ++result : result,0));
console.log("Элементов null:", thisArray.reduce( (result, item) => result = item == null ? ++result : result,0));
