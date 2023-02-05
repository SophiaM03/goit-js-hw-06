const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
inputRef.addEventListener(
  "input",
  ({ target: { value } }) => (spanRef.style.fontSize = value + "px")
);
