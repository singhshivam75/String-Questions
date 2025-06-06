// Write a js program to search all occurrences of a character in given string.

function findAllOccurrences(str, char) {
  let indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  
}
let str = "Shivam Singh";
let char = "i";
findAllOccurrences(str, char);