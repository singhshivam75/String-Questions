// Write a C program to find reverse of a string.

function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
  
}
reverseString("Hello, World!");