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


