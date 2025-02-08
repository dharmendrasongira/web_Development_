// Select the form element from the document
let form = document.querySelector("form");

// Attach a 'submit' event listener to the form
form.addEventListener("submit", function(event) {
    // Log a message indicating form submission in the console
    console.log("Form submitted");

    // Show an alert to notify the user that the form has been submitted
    alert("Form submitted");

    // Prevent the default form submission action
    // This stops the form from redirecting to the URL defined in the 'action' attribute
    event.preventDefault();
    
    // You can add additional logic here, like form validation or AJAX submission
    // This allows you to handle the form data without navigating away from the page
});
