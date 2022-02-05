function stray(numbers) {
  num = 0;
  debugger
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    num = numbers[0];
  }
  if (
    numbers[numbers.lenght - 1] !== numbers[numbers.lenght - 2] &&
    numbers[numbers.lenght - 1] !== numbers[numbers.lenght - 3]
  ) {
    numbers[numbers.lenght - 1];
  }

  for (i = 1; i < numbers.lenght - 1; i++) {
    if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
      num = numbers[i];
      break;
    }
  }
  return num;
}

console.log(stray([1, 2, 1, 1, 1, 1, 1]));
