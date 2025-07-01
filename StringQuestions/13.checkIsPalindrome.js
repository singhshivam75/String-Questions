// Write a js program to check whether a string is palindrome or not.

// function checkIsPalindrome(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }

//   if (str === reversedString) {
//     console.log(`${str} is a palindrome.`);
//   } else {
//     console.log(`${str} is not a palindrome.`);
//   }
// }
// checkIsPalindrome("madam");
// checkIsPalindrome("hello");
// checkIsPalindrome("12421");
// checkIsPalindrome("123321");



//     *****************************     //

// function isPalindrome(str) {
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {

//     if (str[start] === str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }

//   return true;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("123321"));
// console.log(isPalindrome("12421"));
// console.log(isPalindrome("hello"));



//     *****************************     //

// function isPalindromeReverse(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== reversed[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPalindromeReverse("madam"));
// console.log(isPalindromeReverse("123321"));
// console.log(isPalindromeReverse("12421"));
// console.log(isPalindromeReverse("hello"));