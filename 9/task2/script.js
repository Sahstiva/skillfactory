const consoleText = document.querySelector(".task__console");
const alertText = document.querySelector(".task__alert");
const promptText = document.querySelector(".task__prompt");

consoleText.addEventListener("click", () =>
  alert("Пример использования команды console.log")
);
alertText.addEventListener("click", () =>
  alert("Пример использования команды alert")
);
promptText.addEventListener("click", () =>
  alert("Пример использования команды prompt")
);
