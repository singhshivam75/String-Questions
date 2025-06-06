// Write a js program to remove last occurrence of a character from string.

function removeLastOccurrence(str, charToRemove) {
  let newString = " ";
  let result = '';
  let found = false;

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    // console.log(char);
    
    if (char === charToRemove && !found) {
      found = true;
    } else {
      newString += char;
    }
  }
  
  for (let j = newString.length - 1; j >= 0; j--) {
    result += newString[j];
  }
  console.log(result);
}
let str = "How's it going?";
let charToRemove = 'o';
removeLastOccurrence(str, charToRemove);