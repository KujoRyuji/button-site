const button = document.getElementById("bigButton");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  status.textContent = "ACTIVATED!";
});
