// Write a js program to replace last occurrence of a character with another in a string.

function replaceLastOccurrence(str, charToReplace, replacementChar) {
  let result = '';
  let finalResult = '';
  let found = false;

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    // console.log(char);
    // console.log(result);
    if (char === charToReplace && !found) {
      result += replacementChar;
      // console.log(result);
      found = true;
    } else {
      result += char;
    }
  }
  for (let j = result.length - 1; j >= 0; j--) {
    finalResult += result[j];
    
  }
  console.log(finalResult);
}
let str = "How's it going?";
let charToReplace = 'o';
let replacementChar = 'a';
replaceLastOccurrence(str, charToReplace, replacementChar);