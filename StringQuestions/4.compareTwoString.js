// Write a js program to compare two strings.

function compareTwoStrings(str1, str2) {
  if (str1 === str2) {
    return console.log("Both strings are equal.");
  } else {
    return console.log("Both strings are not equal.");
  }  
}
let str1 = "Shivam";
let str2 = "Shivam";
let str3 = "Shivam";
let str4 = "ShivaM";
compareTwoStrings(str1, str2);
compareTwoStrings(str3, str4);