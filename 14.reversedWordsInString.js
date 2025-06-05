// Write a js program to reverse order of words in a given string.

function reverseWordsInString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  }
}
let str = "Hello World!";
reverseWordsInString(str);