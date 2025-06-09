// Write a js program to check whether a string is palindrome or not.

function checkIsPalindrome(str) {
  let reversedString = "";
  // let isPalindrome = "";
// single loop
  // for (let i = 0; i < str.length; i++) {
  //   originalString += str[i];
  // }

  // reversedString = originalString.length - 1;
  // console.log(reversedString);
  
  // console.log(originalString);
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
  
  if (str === reversedString) {
    console.log(`${str} is a palindrome.`);
  } else {
    console.log(`${str} is not a palindrome.`);
  }
}
checkIsPalindrome("madam");
checkIsPalindrome("hello");
checkIsPalindrome("12421");
checkIsPalindrome("123321");