let url = "https://catfact.ninja/fact";

// Define an asynchronous function to get cat facts
async function getsfacts() {
    try {
        // Wait for the fetch request to complete
        let res = await fetch(url);
        
        // Wait for the response to be converted to JSON
        let data = await res.json();
        
        // Log the fact from the data
        console.log(data.fact);
    } catch (error) {
        // Log any errors if the fetch or JSON parsing fails
        console.log(error);
    }
}

// Call the function
getsfacts();
