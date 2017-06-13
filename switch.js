function doFizzBuzz(num) {
  switch (num % 15){
    case 3:
    case 6:
    case 9:
    case 12:
      return 'fizz';

    case 5:
    case 10:
      return 'buzz';

    case 15:
      return 'fizzBuzz';

    default:
      return num;
  }
      
}
function makeFizzBuzzArray (countTo){
  const result = []
  for (let i = 1; i <= countTo; i++) {
    result.push(doFizzBuzz(i));
  }

return result
}

console.log(makeFizzBuzzArray(15));