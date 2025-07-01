// Write a js program to remove first occurrence of a character from string.

// function removeFirstOccurrence(str, charToRemove) {
//   let newString = '';
//   let found = false;
//   for (const char of str) {
    
//     if (char === charToRemove && !found) {
//       found = true;
//     } else {
//       newString += char;
//     }
//   }
//   console.log(newString);
// }

// let str = "Hello World!";
// let charToRemove = 'l';
// removeFirstOccurrence(str, charToRemove);




//     *****************************     //

function removeFirstOccurrence2(str, charToRemove) {
  let result = '';
  let found = false;

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] === charToRemove && !found) {
      found = true;
      continue;
    }
    result += str[i];
  }
  console.log("Result: ", result);
  
}

let str1 = "Hello World!";
let charToRemove2 = 'l';
removeFirstOccurrence2(str1, charToRemove2);