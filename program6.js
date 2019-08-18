function guessRandomNumber(upper)   //to stop repeatation of code we use function
{
  return Math.floor(Math.random()*upper) + 1
}
var guess;
var correctGuess= false; //boolean: we use boolean flag to control the flow of function and check certain condition
var randomNumber= guessRandomNumber(5);
var guessCount= 0;
while(guessCount<10)// giving attempts 10 times
{guessCount++;
guess=parseInt(prompt("please enter any number frm 1 to 5"));
if (guess === randomNumber)
{correctGuess= true;}// making boolean flag true if the condition is true
break;// if the condition gets true out the value out of loop
}
//if the guess is correct
if(!correctGuess)
{alert("your answer is correct: ");}
else {
  {alert("you missed all your chances:");}
}

console.log(guessCount);
console.log(guess);
console.log(randomNumber);
