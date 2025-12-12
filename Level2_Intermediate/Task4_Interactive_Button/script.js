// Select the button and the body
const button = document.querySelector(".btn");
const body = document.body;

// List of colors 
const colors = ["red", "aqua", "yellow", "orange", "aquamarine", "pink"];

button.addEventListener("click", () => {
  // random color 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Applying color to body background
  body.style.backgroundColor = randomColor;

  // Change button text 
  button.textContent = "Clicked! Background Changed";

  // Reset text after 2 seconds
  setTimeout(() => {
    button.textContent = "Click Me to Change Background";
  }, 2000);
});
