// Write a js program to convert uppercase string to lowercase.

function upperToLowerCase(str) {
  let lowercaseString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      lowercaseString += String.fromCharCode(charCode + 32);

    } else {
      lowercaseString += str[i];
    }
  }
  console.log(lowercaseString);
}
let str1 = "HELLO WORLD!";
let str2 = "Hello World!";
upperToLowerCase(str1);
upperToLowerCase(str2);