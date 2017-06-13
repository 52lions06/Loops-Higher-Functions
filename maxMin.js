'use strict'

let array = [1,2,3,4,5,6,7]

function max(numbers) {
  let largest = 0;
  let i = 0
  while (i < numbers.length) {
      if (numbers[i] > largest){
        largest = numbers[i];
      }
            i++; 

    }

  return largest 
}

max(array):

let array2 = [-1,1,2,3,4,5,6,7]

function min(numbers) {
  let smallest = 0;
  let i = 0;
  while (i < numbers.length) {
      if (numbers[i] < smallest){
        smallest = numbers[i];
      }
            i++; 

    }

  return smallest 
}

min(array2);

//VM85:1 Uncaught SyntaxError: Identifier 'array' has already been declared
    //at <anonymous>:1:1
    //message was coming up even though it was in a "let" variable, value did not switch, why?