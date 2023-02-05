const form = document.querySelector(".login-form");
const loginFormSubmit = (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  console.log({ email, password });
  event.target.reset();
};
form.addEventListener("submit", loginFormSubmit);
