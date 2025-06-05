// Write a js program to convert lowercase string to uppercase.

function lowerToUpperCase(str) {
  let uppercaseString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    // console.log(charCode);
    
    if (charCode >= 97 && charCode <= 122) { 
      uppercaseString += String.fromCharCode(charCode - 32); 
    } else {
      uppercaseString += str[i];
      
    }
  }
  console.log(uppercaseString);
}
lowerToUpperCase("hello world!");




// String.fromCharCode   converts Unicode values to characters
// String.charCodeAt     returns the Unicode value of a character at a specified index  