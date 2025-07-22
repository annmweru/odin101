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
  
 const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const uppper = cats.map((cat) => cat.toUpperCase())
                   
        console.log(uppper)
                  
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upper = cats.filter((cat) => cat.startsWith('L'))
                   
        console.log(upper)
                  

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for (const name of people ){
   if (name === "Phil" || name === "Lola"){
     refused.textContent += name.concat(", ")
     
   } else {
      admitted.textContent += name.concat(", ");

   }
}
refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
const sum = [1,2,3,4,5,6,7,8,9,10]
 console.log(sumOfTripledEvens(sum))

camelize("background-color") == 'backgroundColor';

function camelize(str) {
  return  str 
   .split ('-')
   .map ((word,index)=>
    index === 0 ? word: word.charAt(0).toUpperCase() + word.slice(1)
  ).join ('')
  
  
 }

 console.log(camelize("annah-color"))



function filterRange (arr,a,b){
  return arr.filter(item => (a <= item && item <= b));
 
}
let arr = [5, 3, 8, 1];

console.log(filterRange(arr,1,4))
alert( arr ); // 5,3,8,1 (not modified)