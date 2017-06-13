function average(numbers) {
  const i = 0;
  const sum = numbers[0];

  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
    const average = sum / numbers.length;

  return average

}
