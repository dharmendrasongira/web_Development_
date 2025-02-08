// Method 1: Simple Function
function savetodb(data) {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
        console.log("your data was saved"); // Success message
    } else {
        console.log("weak connection, data not submitted"); // Failure message
    }
}

// Call the function to save "apnacollege"
savetodb("apnacollege"); 

// Method 2: Using Callbacks for Success and Failure
function savetodb(data, success, failure) {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
        success(); // Call success callback if internet speed is sufficient
    } else {
        failure(); // Call failure callback if internet speed is weak
    }
}

// Initiating the save process with callbacks
savetodb("apnacollege", 
    () => { // Success callback for "apnacollege"
        console.log("success");
        savetodb("shrdha", 
            () => { // Success callback for "shrdha"
                console.log("success");
                savetodb("hello", 
                    () => { // Success callback for "hello"
                        console.log("success3"); 
                    },
                    () => { // Failure callback for "hello"
                        console.log("failure"); 
                    }
                );
            },
            () => { // Failure callback for "shrdha"
                console.log("failure");
            }
        );
    },
    () => { // Failure callback for "apnacollege"
        console.log("failure");
    }
);

/*
Differences between Method 1 and Method 2:

1. Method 1 is a simple function that executes synchronously, providing immediate feedback without structured error handling.
   - Best for straightforward tasks where no chaining of actions is needed.
   - Lacks flexibility for handling multiple operations or errors.

2. Method 2 uses callbacks to handle success and failure, allowing for asynchronous execution.
   - Provides structured error handling and enables chaining of operations based on success.
   - More flexible for complex workflows but can lead to "callback hell" with nested functions.
   - Suitable for scenarios where subsequent actions depend on previous outcomes.
*/
