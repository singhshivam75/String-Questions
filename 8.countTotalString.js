// Write a js program to find total number of alphabets, digits or special character in a string.


function countTotalString(str) {
  let totalAlphabets = "";
  let totalDigits = "";
  let totalSpecialCharacter = "";
  let Others = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    // console.log(charCode);

    if (charCode >= 65 && charCode <= 90 || charCode >= 90 && charCode <= 122) {
      totalAlphabets++;
      // console.log(totalAlphabets);
      
    } else if (charCode >= 48 && charCode <= 57) {
      totalDigits++;

    } else if (
      charCode >= 32 && charCode <= 47 ||
      charCode >= 58 && charCode <= 64 ||
      charCode >= 91 && charCode <= 97 ||
      charCode >= 123 && charCode <= 126
    ) {
      totalSpecialCharacter++;
    } else {
      Others++;
    }
  }
console.log(`Total Alphabets: ${totalAlphabets}
Total Digits: ${totalDigits}
Total Special Characters: ${totalSpecialCharacter}
Others: ${Others}`);
}

let str = "Hello World! 12345 @#$%";
countTotalString(str);




// 32 to 47 are special characters
// 58 to 64 are special characters
// 91 to 96 are special characters
// 123 to 126 are special characters
// 48 to 57 are digits
// 65 to 90 are uppercase alphabets
// 97 to 122 are lowercase alphabets