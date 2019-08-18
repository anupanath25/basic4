var randomNumber = guessRandom(10);
 var guess ;
 var guessCount = 0 ;
 var correctGuess = false ;

 function guessRandom(upper)
 {
   return Math.floor(Math.random()* upper);

 }
 do {
   guess = prompt("enter number");
   guessCount += 1
   if(parseInt(guess) === randomNumber){
     correctGuess = true;
   }
  } while(!correctGuess)

  document.write( randomNumber);
  document.write(guessCount);
