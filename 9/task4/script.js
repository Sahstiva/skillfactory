const linkToChange = document.querySelector(".task__link");

linkToChange.addEventListener("click", (event) => {
  event.preventDefault();
  let newText = prompt("Введите текст: ").toUpperCase();
  event.target.textContent = newText;
});
