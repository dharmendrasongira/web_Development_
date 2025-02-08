var divs = document.querySelectorAll('.tab');  // Use querySelectorAll to select all divs
var texts = document.querySelectorAll('h3');   // Assuming all h3 elements are your text elements

// Initial setup for the first text
texts[0].style.display = "block";
texts[0].style.width = "50%";

// Loop over each tab (div)
divs.forEach(function(div, index) {
    div.addEventListener("click", function() {
        hideAllText();
        texts[index].style.display = "block";    // Display the corresponding text
        texts[index].style.width = "50%";        // Set the width of the displayed text
    });
});

// Function to hide all text elements
function hideAllText() {
    texts.forEach(function(text) {
        text.style.display = "none";  // Hide all texts
    });
}
