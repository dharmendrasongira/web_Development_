let month =["january","july","march","august"];

month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);


//splice

month.splice(0,2,"july","june");

let lang=["c","c++","html","javascript","python","java","c#","sql"];

console.log(lang.reverse().indexof("javascript"));