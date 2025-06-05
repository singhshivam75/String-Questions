// Write a js program to concatenate two strings.

// function concatenateTwoStrings(str1, str2) {
//   let mergedString = "";
//   for (let i = 0; i < str1.length; i++) {
//     mergedString += str1[i];
//   }
//   for (let j = 0; j < str2.length; j++) {
//     mergedString += str2[j];
    
//   }
//   console.log('Concatenated String:', mergedString);
//   console.log('First String:', str1);
//   console.log('Second String:', str2);
// }
// concatenateTwoStrings("Hello, ", "Shivam!");


function concatenateTwoStrings(...strings) {
  let mergedString = "";
  for (let str of strings) {
    console.log('Current String:', str);
    
    for (let char of str) {
      mergedString += char;
    }
  }
  console.log('Concatenated String:', mergedString);
  console.log('Original Strings:', strings);
  
}
concatenateTwoStrings("Hello, ", "Shivam!", " How are you?");