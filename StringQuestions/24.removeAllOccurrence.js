// Write a js program to remove all occurrences of a character from string.

function removeAllOccurrences(str, charToRemove) {
  let newString = '';

  for (const char of str) {
    // console.log(char);

    if (char != charToRemove) {
      newString += char;
    }
    
  }
  console.log(newString);
}
let str = "Hello World!";
let charToRemove = 'l'; 
removeAllOccurrences(str, charToRemove);