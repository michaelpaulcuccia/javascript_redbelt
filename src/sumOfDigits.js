function sumOfDigits(num) {
  // Convert the number to a string, then split into individual characters, and convert them back to numbers
  const digits = num.toString().split("").map(Number);

  // Use reduce to sum up all the digits
  const total = digits.reduce((acc, current) => acc + current, 0);

  return total;
}

console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(987)); // Output: 24

/*
Challenge: Sum of Digits
Write a function that takes a positive integer as input and returns the sum of its digits.

For example:

sumOfDigits(123) → 6
sumOfDigits(4567) → 22
*/
