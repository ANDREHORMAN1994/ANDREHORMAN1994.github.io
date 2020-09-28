function fizzBuzz(arrayQuestion08) {
  for (let i = 0; i < arrayQuestion08.length; i += 1) {
    if (arrayQuestion08[i] % 3 == 0) {
      arrayQuestion08[i] = "fizz";
    } else if (arrayQuestion08[i] % 5 == 0) {
      arrayQuestion08[i] = "buzz";
    } else if (arrayQuestion08[i] % 3 == 0 && arrayQuestion08[i] % 5 == 0) {
      arrayQuestion08[i] = "fizzBuzz";
    } else {
      arrayQuestion08[i] = "bug!";
    }
  }
  return arrayQuestion08;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));