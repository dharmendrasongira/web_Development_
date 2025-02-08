let name = ["tony", "bruce", "peter", "steve"];

// Normal way of assigning array elements to variables
// let winner = name[0];
// let runnerup = name[1];
// let secondrunnerup = name[2];

// By using array destructuring, we can achieve the same result in a more concise way
let [winner, runnerup, secondrunnerup] = name; // Destructuring first three elements into variables

// If you want to unpack the first two elements, and group the rest into another array
let [winner1, runnerup2, ...other] = name;

// Now, 'winner1' is "tony", 'runnerup2' is "bruce", and 'other' is an array containing the remaining elements.
console.log(winner1);  // Output: "tony"
console.log(runnerup2);  // Output: "bruce"
console.log(other);  // Output: ["peter", "steve"]
