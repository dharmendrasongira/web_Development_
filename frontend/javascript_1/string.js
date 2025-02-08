let str = "   hello   ";
let newstr= str.trim();
console.log(newstr);
//input lene ke liye
let pass = prompt("set your password");


//trim
let a = " Happy   ";
console.log(a.trim());

//uppercase 
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//index pe jo value hogi 
let b= "bestofluck";
console.log(b.indexOf(2));
/// esa index daloge jo hoga nahi -1 return kar dega
console.log(b.indexOf(100));

//method chaining
console.log(a.trim().toUpperCase());

//slice(substing jesa hai same)

//ye 4 se leke last tak ke index ke sare char print kardega

str= b.slice(4);
console.log(str);

////negative doge toh uss value ko lenght se minus kar ke jo number ayega uss jagha ka charchter  se last tak ke char
str= b.slice(-4);

// start or end dono index de skte hai
 let msg = "baananna";
 console.log(msg.slice(2,5));


 //replace kar sakte hai 
 console.log(b.replace("best","good"));


 /// repeat kar skate bus likh do kitni baar karna hai 
console.log ( str.repeat(2));




