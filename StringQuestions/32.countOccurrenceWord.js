// Write a js program to count occurrences of a word in a given string.

function countWordOccurrences(str, word) {
  let count = 0;
  
  let i = 0;
  while (str[i] !== undefined) {
    let match = true;

    let j = 0;
    while (word[j] !== undefined) {
      if (str[i + j] !== word[j]) {
        match = false;
        break;
      }
      j++;
    }

    if (match) {
      count++;
    }

    i++;
  }

  return count;
}

let text = "The dog barked at the other dog while the dog watched.";
let word = "dog";

console.log(countWordOccurrences(text, word)); // Output: 3
