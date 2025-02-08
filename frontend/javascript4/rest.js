// normal function using 'arguments'
function normal(a, b) {
    // 'arguments' is an array-like object that holds all arguments passed to the function.
    // It can be useful when you don't know how many arguments will be passed.
    // However, 'arguments' is not a real array, so you cannot use array methods like map or forEach.
    console.log(arguments);          // Logs the Arguments object, which contains all the passed arguments.
    console.log(arguments.length);   // 'arguments.length' gives the number of arguments passed.
}

// function using rest parameters
function sum(...arg) { /* rest */
    // The rest parameter syntax ( ...arg ) allows you to represent an indefinite number of arguments as an array.
    // Unlike 'arguments', the rest parameter gives you a real array, so you can use array methods like map, forEach, etc.
    for (let i = 0; i < arg.length; i++) {
        console.log('Your args are: ' + arg[i]);  // Iterating over the array and logging each argument
    }
}

// Testing the functions
normal(1, 2, 3);  // Outputs: Arguments object and the number of arguments
sum(1, 2, 3);     // Outputs: 'Your args are: 1', 'Your args are: 2', 'Your args are: 3'
