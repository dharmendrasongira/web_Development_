let head = document.querySelector('h1');

// Log the current list of classes on the <h1> element
console.log(head.classList);

// Add multiple classes: "aa", "ok", and "green"
head.classList.add("aa", "ok", "green");

// Check if the class "green" exists, but it won't output anything since it's not inside a console.log
head.classList.contains("green");

// Remove the class "ok"
head.classList.remove("ok");

// Toggle the class "green" (if it exists, it will be removed; if it doesn't exist, it will be added)
head.classList.toggle("green");

// Toggle the class "pink" (if it exists, it will be removed; if it doesn't exist, it will be added)
head.classList.toggle("pink");
