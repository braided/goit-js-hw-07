const input = document.querySelector("#name-input");
let nameUser = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const text = input.value.trim();
  if (text !== "") {
    nameUser.textContent = text;
  } else {
    nameUser.textContent = "Anonymous";
  }
});
