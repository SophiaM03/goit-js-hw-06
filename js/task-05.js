const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function input(event) {
  if (event.target.value.trim() !== "") {
    nameOutput.textContent = event.target.value;
  } else nameOutput.textContent = "Anonymous";
}
nameInput.addEventListener("input", input);
