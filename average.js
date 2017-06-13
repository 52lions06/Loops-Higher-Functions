function average(numbers) {
  let i = 0;
  let sum = numbers[0];

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
    const average = sum / numbers.length;

  return average

}
console.log(average([1,3,5]));