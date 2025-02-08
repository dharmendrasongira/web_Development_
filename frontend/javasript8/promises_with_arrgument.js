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
        console.log(message); // Log success message for "apna"
        
        // Call savetodb with "hello" if the previous call was successful
        savetodb("hello")
            .then((message) => {
                console.log(message); // Log success message for "hello"
                
                // Call savetodb with "ok" if the previous call was successful
                savetodb("ok")
                    .then((message) => {
                        console.log(message); // Log success message for "ok"
                    });
            });
    })
    .catch((error) => {
        console.log(error); // Handle error if any of the promises are rejected
    });

/*
In this code:
1. The `savetodb` function simulates a save operation by using a Promise.
2. Each call to `savetodb` generates a random "internet speed." 
3. If the speed is greater than 4, it resolves with a success message including the data passed to it.
4. If it fails (speed 4 or below), it rejects with a failure message.
5. The main logic starts by calling `savetodb("apna")`. 
6. If it resolves, it chains another call to `savetodb("hello")` and subsequently to `savetodb("ok")`, logging success messages for each.
7. If any call fails, it catches the error and logs a failure message.
*/
