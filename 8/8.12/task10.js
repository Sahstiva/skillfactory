let testNumber = +prompt("Введите число меньше 1000: ");
console.log(isSimple(testNumber));

function isSimple(n) {
  if (typeof n != "number") return `Вы ввели ${n}, нужно было ввести число!`;
  if (n >= 1000)
    return `Вы ввели ${n}, больше или равно 1000. Введите число меньше 1000!`;
  if (n == 0 || n == 1) return `${n} не является простым числом`;
  for (let i = 2; i < n; i++)
    if (n % i == 0) return `${n} не является простым числом, кратно ${i}`;
  return `${n} является простым числом`;
}
