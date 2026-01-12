const button = document.getElementById("bigButton");

let pressCount = 0;
let isWaiting = false;

const breathingFilter = "drop-shadow(0 0 15px rgba(0, 255, 220, 0.7)) drop-shadow(0 0 35px rgba(0, 255, 220, 0.5)) drop-shadow(0 0 75px rgba(0, 255, 220, 0.3))";
const ledOnFilter = "drop-shadow(0 0 40px rgba(0, 255, 220, 1)) drop-shadow(0 0 70px rgba(0, 255, 220, 0.9)) drop-shadow(0 0 150px rgba(0, 255, 220, 0.7))";

button.addEventListener("click", () => {
  if (isWaiting) return; // Prevent double clicking during waiting state

  if (pressCount === 0) {
    // First press: Transition from breathing to LED-on state
    pressCount = 1;
    isWaiting = true;

    // Transition to led-on state smoothly
    button.style.filter = ledOnFilter;

    // Wait for 3 seconds, then go back to breathing
    setTimeout(() => {
      button.style.filter = breathingFilter; // Go back to breathing effect
      isWaiting = false;
    }, 3000); // 3 seconds delay before returning to breathing

  } else if (pressCount === 1) {
    // Second press: Transition to LED-on and stay there
    pressCount = 2;
    button.style.filter = ledOnFilter; // Stay in LED-on state
    button.style.cursor = "default"; // Disable further clicks
  }
});
