// Select the form element from the document
let form = document.querySelector("form");

// First submit event listener
form.addEventListener("submit", function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Select the username and password input elements by their IDs
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    // Log the values of the username and password inputs
    console.log("Username:", user.value);
    console.log("Password:", pass.value);
});

// Second submit event listener
form.addEventListener("submit", function(event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Access form elements directly using 'this.elements'
    // 'this.elements[0]' represents the first input (username)
    // 'this.elements[1]' represents the second input (password)
    let user = this.elements[0];
    let pass = this.elements[1];

    // Log the values of the username and password inputs
    console.log("Username:", user.value);
    console.log("Password:", pass.value);
});
