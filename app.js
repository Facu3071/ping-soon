form = document.querySelector(".form");
email = document.querySelector(".input-email");
container = document.querySelector(".input-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    container.classList.add("error");
    email.placeholder = "email@example.com";
  } else if (!validateEmail(email.value)) {
    container.classList.add("error");
    email.placeholder = "email@example.com";
  } else {
    container.classList.remove("error");
    alert("email send succesfully");
    form.reset();
  }
  console.log();
});

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
