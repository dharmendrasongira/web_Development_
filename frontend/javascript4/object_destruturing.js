let student = {
    name: "karan",
    age: 14,
    class: 9,
};

// Normal way to assign object properties to variables
// let username = student.name;
// let umar = student.age;

// Destructuring the object
let { 
    name: username,  // Assigning 'name' to a new variable 'username'
    age: umar,       // Assigning 'age' to a new variable 'umar'
    city = "dewas"   // Providing a default value 'dewas' for 'city' which doesn't exist in the 'student' object
} = student;

console.log(username);  // Output: "karan"
console.log(umar);      // Output: 14
console.log(city);      // Output: "dewas" (since 'city' is not in the object, it takes the default value)
