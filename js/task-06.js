const input = document.querySelector("#validation-input");
input.addEventListener("blur", ({ target, target: { value, dataset } }) => {
  value.length === Number(dataset.length)
    ? toggleClass(target, "valid", "invalid")
    : toggleClass(target, "invalid", "valid");
});
function toggleClass(ref, add, rem) {
  ref.classList.add(add);
  ref.classList.remove(rem);
}
