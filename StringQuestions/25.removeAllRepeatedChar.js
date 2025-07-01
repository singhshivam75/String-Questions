// Write a js program to remove all repeated characters from a given string.

function removeAllRepeatedChars(str) {
  let result = '';
  let newString = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

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
removeAllRepeatedChars(str);




//     *****************************     //

// function removeRepeatedCharactors(str) {
//   let newChars = {};
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (newChars[char]) {
//       newChars[char]++;
//     } else {
//       newChars[char] = 1;
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     // console.log(newChars[str[i]]);
    
//     if (newChars[str[i]] === 1) {
//       result += str[i];
//     }
    
//   }

//   console.log("Original string: " + str);
//   console.log("After removing repeated characters: " + result);
  
// }

// let str1 = "How are you doing today?";
// removeRepeatedCharactors(str1);