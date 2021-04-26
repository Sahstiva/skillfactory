let userInput = prompt("Введите число, строку или логическое значение: ");
if(userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false")
  userInput = userInput.toLowerCase() === "true" ? true : false;
switch (typeof userInput) {
  case "string":
    alert(`Вы ввели строку ${userInput}`);
    break;
  case "boolean":
    alert(`Это ${ userInput ? '' : 'не'} правда, что вы ввели ${userInput}`);
    break;
  case "number":
    alert(`Вы ввели число ${userInput}`);
    break;
  default:
    alert(`Тип ${userInput} не определён`);
}