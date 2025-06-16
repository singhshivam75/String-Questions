// Write a C program to remove first occurrence of a character from string.

function removeFirstOccurrence(str, charToRemove) {
  let newString = '';
  let found = false;
  for (const char of str) {
    // console.log(char);
    
    if (char === charToRemove && !found) {
      found = true;
    } else {
      newString += char;
    }
  }
  console.log(newString);
}

let str = "Hello World!";
let charToRemove = 'l';
removeFirstOccurrence(str, charToRemove);