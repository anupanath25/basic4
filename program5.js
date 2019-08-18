

function guessRandomNumber(upper)   //to stop repeatation of code
{
  return Math.floor(Math.random()*upper) + 1
}


var guess;
var randomNumber = guessRandomNumber(6) ;
var atteMPT=0; //to check number of attempts

while(true)    // the loop will continue till i dont put correct value
{
  atteMPT+=1;

  guess = parseInt(prompt("Please Enter any number between one to six"));

  if(guess === randomNumber ){
    break;
  }
}
console.log("your random number "+randomNumber);
console.log("attempt"+atteMPT);
console.log("your guess is "+guess);
