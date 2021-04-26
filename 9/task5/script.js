const inputField = document.querySelector(".task__input");
const inputText = document.querySelector(".task__text-put-here");
const inputButton = document.querySelector(".task__button");

inputField.addEventListener("input", (event) => {
  inputText.textContent = event.target.value;
});

inputButton.addEventListener("click", (event) => {
  console.log(inputField.value);
  inputField.value = "";
  inputText.textContent = "";
});
