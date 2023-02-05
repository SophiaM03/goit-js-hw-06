const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function handleChangeColor() {
  const currentColor = getRandomHexColor();
  document.body.setAttribute("style", `background:${currentColor}`);
  color.textContent = currentColor;
}
button.addEventListener("click", handleChangeColor);
