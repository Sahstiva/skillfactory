const maxArrayLen = 20;
const maxArrayNumber = 100;
const thisArrayLen = Math.floor(Math.random() * maxArrayLen);

let thisArray = [];
for (let i = 0; i < thisArrayLen; i++)
  thisArray.push(
    i % 5
      ? !(i % 3)
        ? "Строка" + i
        : Math.floor(Math.random() * maxArrayNumber)
      : null
  );

console.log(`Массив из ${thisArray.length} элементов`, thisArray);

let isOdd = (item) =>
  !(item % 2) ? false : item == null || typeof item != "number" ? false : true;
let isEven = (item) =>
  item % 2 ? false : item == null || typeof item != "number" ? false : true;
let isNull = (item) => item == null;

let oddNumbers = 0,
  evenNumbers = 0,
  nulls = 0,
  strings = 0;
for (item of thisArray) {
  if (isOdd(item)) oddNumbers++;
  else if (isEven(item)) evenNumbers++;
  else if (isNull(item)) nulls++;
  else if (typeof item === "string") strings++;
}

console.log(`В массиве ${oddNumbers} нечётных элементов,
                       ${evenNumbers} чётных элементов,
                       ${nulls} элементов null,
                       ${strings} строк,
                       ${
                         thisArray.length -
                         oddNumbers -
                         evenNumbers -
                         nulls -
                         strings
                       } элементов других типов`);
