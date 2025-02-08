// Select the form element from the document
let form = document.querySelector("form");

// Select the first user input field (with ID "user") from the document
let use = document.querySelector("#user");

// Select the second user input field (with ID "user1") from the document
let use1 = document.querySelector("#user1");

// Attach a 'change' event listener to the first user input field
use.addEventListener("change", function() {
    // The 'change' event triggers only after the user finishes editing 
    // and leaves the input field (by clicking elsewhere or pressing "Tab").
    // It does not fire continuously with each keystroke.
    console.log("Change triggered on #user");

    // Log the final value of the input field after editing is complete
    console.log("Final value of #user:", this.value);
});

// Attach an 'input' event listener to the second user input field
use1.addEventListener("input", function() {
    // The 'input' event triggers every time the input's value changes,
    // firing immediately with each keystroke, deletion, or paste.
    // This makes it ideal for real-time feedback.
    console.log("Input triggered on #user1");

    // Log the current value of the input field as the user types
    console.log("Current value of #user1:", this.value);
});
