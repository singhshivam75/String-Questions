// Write a js program to remove all extra blank spaces from given string.

function removeExtraSpaces(str) {

  let newString = '';

  for (let i = 0; i < str.length; i++) {

    if (str[i] !== ' ' || (str[i] === ' ' && str[i - 1] !== ' ')) {
      
      newString += str[i];
    }
  }
  console.log(newString);

}
let str = "  This   is   a   string   with   extra   spaces.  ";
removeExtraSpaces(str);  // This is a string with extra spaces.