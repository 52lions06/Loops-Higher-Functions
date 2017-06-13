'use strict'

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