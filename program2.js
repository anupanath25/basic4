var digit =5;
var number= Math.floor(Math.random()*digit);

var num_attempts=0;
while(guess!==number) // if the guess is not equal to number
{
  var guess=parseInt(prompt("enter the number"));
num_attempts+=1;

}


document.write(num_attempts);
//.sort, .lastindexof, .slice,
