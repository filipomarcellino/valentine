var noButtonClickCount = 0;

document.getElementById("no").addEventListener("click", function () {
  // Increment the click counter each time the button is clicked
  noButtonClickCount++;

  // Check the number of times the button has been clicked
  if (noButtonClickCount == 1) {
    // For the first click, change the button text
    this.textContent = "Definitely!!"; // Use "this" to refer to the button clicked
    this.style.backgroundColor = "#ff69b4"; // Optional: Change button style
    this.style.transform = "scale(1.1)"; // Corrected property name for scaling
  } else if (noButtonClickCount == 2) {
    // For the second click, display the GIF covering the whole page
    var gif = document.getElementById("catgif");
    gif.style.position = "fixed";
    gif.style.left = "0";
    gif.style.top = "0";
    gif.style.width = "100vw";
    gif.style.height = "100vh";
    gif.style.zIndex = "1000";
    gif.style.display = "block";
  }
});

document.getElementById("yes").addEventListener("click", function () {
  var gif = document.getElementById("catgif");
  gif.style.position = "fixed"; // Position it relative to the viewport
  gif.style.left = "0"; // Align it to the left
  gif.style.top = "0"; // Align it to the top
  gif.style.width = "100vw"; // Set its width to cover the viewport width
  gif.style.height = "100vh"; // Set its height to cover the viewport height
  gif.style.zIndex = "1000"; // Ensure it overlaps other elements
  gif.style.display = "block"; // Make sure it's displayed if previously hidden
});
