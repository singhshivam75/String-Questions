// Write a js program to find last occurrence of a word in a given string.

function findLastOccurrence(str, word) {
  let lastIndex = -1;
  
  for (let i = 0; i < str.length; i++) {

    let matched = true;

    for (let j = 0; j < word.length; j++) {
      if (str[i + j] !== word[j]) {
        matched = false;
        break;
      }
    }

    if (matched) {
      lastIndex = i; 
    }
  }

  console.log(lastIndex);
  
}

let str = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
let word = "dog";
findLastOccurrence(str, word); // Output: 43