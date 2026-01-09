const button = document.getElementById("bigButton");
let pressCount = 0; // Track number of presses (max 2)
let isWaiting = false; // Track if button is in cooldown

button.addEventListener("click", () => {
  // Block clicks if currently waiting
  if (isWaiting) return;
  
  if (pressCount === 0) {
    // FIRST PRESS: Glow temporarily
    pressCount = 1;
    isWaiting = true; // Lock the button
    
    button.classList.add("active");
    button.style.cursor = "pointer"; // Show it's locked
    button.style.opacity = "1";
    
    // After 3 seconds, fade back to off and unlock
    setTimeout(() => {
      button.classList.remove("active");
      isWaiting = false; // Unlock the button
      button.style.cursor = "pointer"; // Restore clickable cursor
      button.style.opacity = "1";
    }, 3000);
    
  } else if (pressCount === 1) {
    // SECOND PRESS: Glow permanently
    pressCount = 2;
    
    button.classList.add("active");
    button.style.cursor = "default"; // Show it's complete
  }
  // If pressCount === 2, do nothing (button is locked permanently)
});