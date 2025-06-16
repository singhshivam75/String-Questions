// Write a js program to remove first occurrence of a word from string.

function removeFirstOccurrence(str, word) {
  let result = '';
  let removed = false;

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

    if (match && !removed) {
      i += j; 
      removed = true;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

let str = "The cat sat on the mat with another cat.";
let word = "cat";

let output = removeFirstOccurrence(str, word);
console.log(output); 
// Output: "The  sat on the mat with another cat."
