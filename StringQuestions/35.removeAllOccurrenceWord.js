// Write a js program to remove all occurrence of a word in given string.

function removeLastOccurrence(str, word) {
  let lastIndex = -1;

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
      lastIndex = i;
    }

    i++;
  }

  let result = '';
  i = 0;

  while (str[i] !== undefined) {
    if (i === lastIndex) {
      i += word.length; 
      continue;
    }
    result += str[i];
    i++;
  }

  return result;
}

let str = "The cat sat on the mat with another cat.";
let word = "cat";

let output = removeLastOccurrence(str, word);
console.log(output); 
// Output: "The cat sat on the mat with another ."
