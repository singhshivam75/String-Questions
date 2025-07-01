// Write a js program to concatenate two strings.

// function concatenateTwoStrings(...strings) {
//   let mergedString = "";
//   for (let str of strings) {
//     console.log('Current String:', str);

//     for (let char of str) {
//       mergedString += char;
//     }
//   }
//   console.log('Concatenated String:', mergedString);
//   console.log('Original Strings:', strings);

// }

// concatenateTwoStrings("Hello, ", "Shivam!", " How are you?");



//     *****************************     //

// let str1 = "Hello";
// let str2 = "Shivam";

// let result = "";

// for (let i = 0; i < str1.length; i++) {
//   result += str1[i];
// }

// result += " ";

// for (let i = 0; i < str2.length; i++) {
//   result += str2[i];
// }
// console.log(result);



//     *****************************     //

function concatenateTwoStrings(str1, str2) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    result += str1[i];
  }

  result += " ";

  for (let i = 0; i < str2.length; i++) {
    result += str2[i];
  }
  console.log(result);

}

let str1 = "Hello,";
let str2 = "How are You!";
concatenateTwoStrings(str1, str2)