let userInput = +prompt("Введите число: ");
if (typeof userInput === "number" && !isNaN(userInput))
  alert(`Вы ввели ${userInput % 2 ? "нечётное" : "чётное"} число ${userInput}`);
else alert("Упс, кажется, вы ошиблись");
