function checkPalindrome(arg) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = arg.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // Check if the cleaned string is equal to its reverse
  if (cleanedString === reversedString) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Test cases
checkPalindrome("racecar"); // true
checkPalindrome("hello"); // false
checkPalindrome("A man, a plan, a canal, Panama"); // true

/*
Challenge: Palindrome Checker
Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.

For example:

isPalindrome("racecar") → true
isPalindrome("A man, a plan, a canal, Panama") → true
isPalindrome("hello") → false

*/
