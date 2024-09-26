function missingNumbers(input) {
  let min = Math.min.apply(null, input);
  let max = Math.max.apply(null, input);
  let result = [];

  for (i = min + 1; i < max; i++) {
    if (!input.includes(i)) result.push(i);
  }
  return result;
}

let array = [6, 2, 3, 8];
console.log(missingNumbers(array));

/*
Challenge: Find the Missing Number
Given an array of consecutive integers (in any order), find the missing number. There is exactly one number missing in the array, and the array contains no duplicates.

For example:

findMissingNumber([3, 0, 1]) → 2
findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) → 8

*/

//IF INCLUDES 0
const numbers1 = [0, 1, 2, 4]; // Changed to include 0 for better testing

function findMissingNumberA(arr) {
  const n = arr.length; // Length of the array
  const expectedSum = ((n + 1) * n) / 2; // Sum of first n natural numbers
  const actualSum = arr.reduce((acc, current) => acc + current, 0); // Sum of elements in the array

  const missingNumber = expectedSum - actualSum; // Missing number
  return missingNumber;
}
console.log(findMissingNumberA(numbers1)); // Output: 3

// DOESN'T INCLUDE ZERO
const numbers2 = [1, 2, 3, 5, 7]; // Missing 4

function findMissingNumberB(arr) {
  const maxNum = Math.max(...arr); // Find the maximum number in the array
  const numberSet = new Set(arr); // Create a set from the array for quick lookups

  // Loop through all numbers from the minimum number in the array to maxNum
  for (let i = Math.min(...arr); i <= maxNum; i++) {
    if (!numberSet.has(i)) {
      return i; // Return the first missing number
    }
  }
  return null; // If no number is missing
}

console.log(findMissingNumberB(numbers2)); // Output: 4

//COMBINED

const numbers3 = [0, 1, 2, 4]; // Includes 0
const numbers4 = [1, 2, 3, 5, 7]; // Does not include 0

function findMissingNumberCombined(arr) {
  if (arr.includes(0)) {
    // If the array includes 0, use the expected sum method
    const n = arr.length; // Length of the array
    const expectedSum = ((n + 1) * n) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((acc, current) => acc + current, 0); // Sum of elements in the array

    const missingNumber = expectedSum - actualSum; // Missing number
    return missingNumber;
  } else {
    // If the array does not include 0, use the set method
    const maxNum = Math.max(...arr); // Find the maximum number in the array
    const numberSet = new Set(arr); // Create a set from the array for quick lookups

    // Loop through all numbers from the minimum number in the array to maxNum
    for (let i = Math.min(...arr); i <= maxNum; i++) {
      if (!numberSet.has(i)) {
        return i; // Return the first missing number
      }
    }
  }
  return null; // If no number is missing (should not happen per problem constraints)
}

// Test cases
console.log(findMissingNumberCombined(numbers3)); // Output: 3
console.log(findMissingNumberCombined(numbers4)); // Output: 4
