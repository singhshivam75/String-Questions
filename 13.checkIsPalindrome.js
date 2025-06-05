// Write a js program to check whether a string is palindrome or not.

function checkIsPalindrome(str) {
  let reversedString = "";
  let originalString = "";
  let isPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    originalString += str[i];
  }
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  if (originalString === reversedString) {
    console.log(`${originalString} is a palindrome.`);
  } else {
    console.log(`${originalString} is not a palindrome.`);
  }
}
checkIsPalindrome("madam");
checkIsPalindrome("hello");
checkIsPalindrome("12421");
checkIsPalindrome("123321");