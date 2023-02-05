function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector("#boxes");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

function createBoxes(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = 30 + i * 10 + "px";
    newBox.style.height = 30 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    arr.push(newBox);
  }
  boxes.append(...arr);
}
function handleCreateBoxes() {
  const value = Number(input.value);
  createBoxes(value);
}
buttonCreate.addEventListener("click", handleCreateBoxes);

function handleDestroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
buttonDestroy.addEventListener("click", handleDestroyBoxes);
