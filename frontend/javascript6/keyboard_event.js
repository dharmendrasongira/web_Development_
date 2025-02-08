// Select the input element from the document
let inp = document.querySelector("input");

// Attach a 'keydown' event listener to the input element
// This event is triggered when any key is pressed down
inp.addEventListener("keydown", function(event) {
    // Log a message indicating a key press event
    console.log("Key pressed");

    // Log the specific key and its code
    // 'event.key' gives the actual character or action (like 'a', 'Enter')
    // 'event.code' gives the physical key code (like 'KeyA', 'Enter')
    console.log("Key:", event.key, "| Code:", event.code);
});

// Attach a 'keyup' event listener to the input element
// This event is triggered when a key is released
inp.addEventListener("keyup", function(event) {
    // Log a message indicating a key release event
    console.log("Key released");

    // Log the specific key and its code, similar to the 'keydown' event
    console.log("Key:", event.key, "| Code:", event.code);
});
