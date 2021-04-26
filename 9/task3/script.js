const trafficLightElement = document.querySelectorAll(".task__trafficlight");

trafficLightElement.forEach((el) =>
  el.addEventListener("click", (event) => {
    trafficLightElement.forEach((el) => (el.style.backgroundColor = "black"));
    event.target.style.backgroundColor = event.target.id;
    console.log(event.target.style);
  })
);
