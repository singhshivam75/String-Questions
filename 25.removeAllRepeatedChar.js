// Write a js program to remove all repeated characters from a given string.

function removeAllRepeatedChars(str) {
  let result = '';
  let newString = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(char);

    if (newString[char] === undefined) {
      newString[char] = 1;

    } else {
      newString[char] += 1;
    }

  }

  for (let j = 0; j < str.length; j++) {
    let char = str[j];

    if (newString[char] === 1) {
      result += char;
    }
    
  }

  console.log(result);

}
let str = "How are you doing today?";
let charToRemove = 'o';
removeAllRepeatedChars(str);