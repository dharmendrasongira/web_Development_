// Function to simulate saving data with a random internet speed
function savetodb() {
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1; // Generate random internet speed between 1 and 10
        if (internetspeed > 4) {
            resolve("success: data has been saved"); // Resolve promise on success
        } else {
            reject("failure: weak connection"); // Reject promise on failure
        }
    });
}

// Example usage of savetodb function
savetodb() // Call the function
    .then(message => console.log(message)) // Log the success message if resolved
    .catch(error => console.log(error)); // Log the error message if rejected

/*
In this example, the savetodb function is called, which returns a Promise. 
The promise randomly resolves or rejects based on the simulated internet speed. 
If the internet speed is greater than 4, the promise resolves and logs a success message. 
If the speed is 4 or less, it rejects and logs a failure message.
*/
