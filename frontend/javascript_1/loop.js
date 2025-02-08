for (let i=1; i<=5; i++){
    console.log(i);
}

//print odd 1 to 15
for (let i=1; i<=15; i +=2 ){
    console.log(i);
}
//or
for (let i=1; i<=15; i++){
   if (i%2 !=0) console.log(i);
}

// print all even 2 to 10
for(let i=2; i<=10 ;i+=2){
    console.log(i);
}
for(let i=10;i>=2;i-=2){
    console.log(i);
}

///infinite loop
for(let i=11; i>=10 ;i+=2){
    console.log(i);
}
// witout any condition it will run infinite
// for(let i=2;  ;i+=2){
//     console.log(i);
// }

// table of 5
for(let i=5; i<=50 ;i+=5){
    console.log(i);
}

//user se puchenge konse number ki table
let n= prompt("please enter a number");

n = parseInt(n);

for (let i =n; i<n*10;i+=n){
  console.log(i);
}


//nested loop
for(let i=1; i<=3 ;i++){
    console.log(`the outer looop ${i}`);
    for (let j=1; j<=3;j++){
    console.log(j);
    }
}

//while loop
 let i=0;
 while(i<5){
    console.log(i);
    i++;
 }

 //break condition

let j=1;
while(i<5){
    if (i==3){break;}
    console.log(i);
    i++;
 }

 //user ko hamri favorite movie guess karni hai 
 let favmovie = "ajab prem ki gajab khani";
 let guess =prompt("guess my favourite movie");

 while (guess != favmovie || guess!="quite" ){
 console.log("wrong");
 let guess =prompt("wrong pleasse guess my favourite movie");
 }
 if (guess == favmovie){
 console.log("congrats u guessed it right");
}
else{
    console.log ("you quite");
}


/// by break

//user ko hamri favorite movie guess karni hai 


while (guess != favmovie){
    if (guess==quite){
        console.log("you quite");
        break;
    }
console.log("wrong");
let guess =prompt("wrong please guess my favourite movie");
}
if (guess == favmovie){
console.log("congrats u guessed it right");
}


////array and loop

let fruit =["mango", "apple","bannana", "litchii", "orange"];
for (let i=0; i<fruit.length; i++){
    console.log(i,fruit[i]);
}

// 2d array

let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

for (let i=0; i<heroes.length;i++){
    console.log(`list #${i}`);
    for(let j=0;j<heroes[i].length; j++){

        console.log(heroes[i][j]);

    }
}


/// easy printing with for of loop
let fruits =["mango", "apple","bannana", "litchii", "orange"];
for(i of fruits){
    console.log(i);
}


/// 2d  printing with for of loop
let heroess=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
 for ( s of heroess){
    //ye indivisual array print kar dega
    console.log(s);
    for(g of s){
        // but ye single single hero print karega
        console.log(g);
    }
 }
