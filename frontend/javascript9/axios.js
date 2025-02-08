let url = "https://catfact.ninja/fact"; // API URL that provides random cat facts

// Define an asynchronous function to fetch the data
async function get() {
    try {
        // Await the axios GET request to the API URL
        let res = await axios.get(url);
        
        // Log the specific "fact" property from the response data
        console.log(res.data.fact);
    } catch (error) {
        // If there's an error with the request, log it
        console.log(error);
    }
}

// Call the function to execute the request
get();
