function fizzBuzz(countTo) {
  switch (countTo){
    case countTo % 3 === 0:
      return "fizz";
      break;
    case countTo % 5 === 0:
      return "buzz";
      break; 
    case countTo % 15 === 0:
      return "fizzbuzz"
      break; 
  }
      
}