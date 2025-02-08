// Function to simulate saving data with a random internet speed
function savetodb(data) {
    return new Promise((resolve, reject) => {
        // Simulate internet speed by generating a random number between 1 and 10
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        
        // If internet speed is greater than 4, resolve the promise with a success message
        if (internetspeed > 4) {
            resolve(`success: ${data} has been saved`);
        } else {
            // Otherwise, reject the promise with a failure message
            reject("failure: weak connection");
        }
    });
}

// Start saving data by calling savetodb with "apna"
savetodb("apna")
    .then((message) => {
        console.log(message); // Log the success message for "apna"
        console.log("data 1 saved"); // Log success for data1
        return "hello"; // Return a string for chaining
    })
    .then((data) => {
        console.log(`${data} saved`); // Log success for "hello"
        return savetodb("ok"); // Call savetodb for "ok" and return the promise
    })
    .then((message) => {
        console.log(message); // Log the success message for "ok"
        console.log("data3 saved"); // Log success for data3
    })
    .catch((error) => {
        console.log(error); // Handle error for any of the above promises
    });

/*
In this updated code:
1. The `savetodb` function remains the same, simulating an asynchronous save operation.
2. The first `.then()` now takes the resolved message as an argument and logs it, showing that "apna" has been saved.
3. It continues to return "hello" for the next `.then()`, which logs the success message for "hello".
4. The next `.then()` logs the resolved message from the `savetodb("ok")` call, indicating it was saved successfully.
5. If any part of the promise chain is rejected, the `.catch()` method will log the error message.
*/
