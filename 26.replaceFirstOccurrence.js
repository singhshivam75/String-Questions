// Write a js program to replace first occurrence of a character with another in a string.

function replaceFirstOccurrence(str, charToReplace, replacementChar) {
  let result = '';
  let found = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(char);
    // console.log(result);
    if (char === charToReplace && !found) {
      result += replacementChar;
      console.log(result);
      found = true;
    } else {
      result += char;
    }
  }
  console.log(result);
}
let str = "How's it going?";
let charToReplace = 'o';
let replacementChar = 'a';
replaceFirstOccurrence(str, charToReplace, replacementChar);