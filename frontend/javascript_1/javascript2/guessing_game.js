const max = prompt("Please enter a maximum number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
while ( true ){
    if ( guess == "quit"){
        console.log("user quite");
        break;
    }
 if (guess ==random){
    console.log("you guessed it right congo!");
break;
}
else if (guess <  random){
     guess = prompt(" hint : your guess is too small !");
} else if (guess > random){
  guess = prompt(" hint : your guess is too big!");
}
else{
    guess = prompt( " your guess was wrong please try again");

}
}
