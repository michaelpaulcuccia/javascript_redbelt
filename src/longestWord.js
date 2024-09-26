const sentence1 = "The quick brown fox jumped over the lazy dog.";

function findLongestWord(arg) {
  // Create an array of words
  const words = arg.split(" ");
  console.log(words);

  // Variable to store the longest word
  let longestWord = "";

  // Iterate through each word in the array
  words.forEach((word) => {
    // Remove punctuation from each word (optional step)
    let cleanedWord = word.replace(/[^\w]/g, "");

    // If the current word is longer than the stored longest word, update it
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  });

  return longestWord;
}

console.log(findLongestWord(sentence1)); // Output: "jumped"

/*
Challenge: Longest Word in a Sentence
Write a function that finds the longest word in a given sentence and returns it. If there are multiple words with the same length, return the first one that appears.

For example:

findLongestWord("The quick brown fox jumped over the lazy dog") → "jumped"
findLongestWord("A journey of a thousand miles begins with a single step") → "thousand"
*/
