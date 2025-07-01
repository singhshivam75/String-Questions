// Write a js program to replace all occurrences of a character with another in a string.

function replaceAllOccurrence(str, charToReplace, replacementChar) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === charToReplace) {
      result += replacementChar;

    } else {
      result += char;
    }
  }
  console.log(result);
}
let str = "How's it going?";
let charToReplace = 'o';
let replacementChar = 'a';
replaceAllOccurrence(str, charToReplace, replacementChar);