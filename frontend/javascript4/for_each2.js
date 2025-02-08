let arr = [
    {
        name: "aman",
        marks: 55,
    },
    {
        name: "dharmendra",
        marks: 99,
    },
    {
        name: "divya",
        marks: 99,
    }
];

// Method 1: Using forEach with a named function
function print(ele) {
    console.log(ele);
}

arr.forEach(print);
// Output (logs each object):
// { name: "aman", marks: 55 }
// { name: "dharmendra", marks: 99 }
// { name: "divya", marks: 99 }


// Method 2: Using forEach with an anonymous function
arr.forEach(function(ele) {
    console.log(ele);
});
// Output (same as method 1):
// { name: "aman", marks: 55 }
// { name: "dharmendra", marks: 99 }
// { name: "divya", marks: 99 }


// Method 3: Using forEach with an arrow function to log marks
arr.forEach((ele) => {
    console.log(ele.marks);
});
// Output (only logs the marks):
// 55
// 99
// 99
