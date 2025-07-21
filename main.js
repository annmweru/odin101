let answer = parseInt (prompt('Enter the number you want to Fizzbuzz to:'))
 for (let i =1 ; i <= answer; i++){
   if (i % 3 ===0){
     console.log('Fizz')
   } else if (i % 5 ===0){
     console.log('Buzz')
   } else if ( i % 3 ===0 & i % 5 ===0){
     console.log('FizzBuzz')
   } else {
       console.log(i);
   }
 }
  