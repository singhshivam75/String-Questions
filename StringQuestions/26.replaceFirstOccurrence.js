// Write a js program to replace first occurrence of a character with another in a string.

function replaceFirstOccurrence(str, charToReplace, replacementChar) {
  let result = '';
  let found = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === charToReplace && !found) {
      result += replacementChar;
      found = true;
    } else {
      result += char;
    }
  }
  console.log("Original String: " + str);
  console.log("After Replacement: " + result);
};

let str = "How's it going?";
let charToReplace = 'o';
let replacementChar = 'a';
replaceFirstOccurrence(str, charToReplace, replacementChar);



//     *****************************     //

// function replaceFirst(str, target, replacement) {
//   let result = "";
//   let i = 0;
//   let replaced = false;

//   while (str[i] !== undefined) {
//     if (!replaced && str[i] === target) {
//       result += replacement;
//       replaced = true;
//     } else {
//       result += str[i];
//     }
//     i++;
//   }

//   console.log(result);
// }

// let str = "How's it going?";
// let charToReplace = 'o';
// let replacementChar = 'a';
// replaceFirst(str, charToReplace, replacementChar);