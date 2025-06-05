// Write a js program to toggle case of each character of a string.

function toggleToString(str) {
  let toggledString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    // console.log(charCode);

    if (charCode >= 65 && charCode <= 90) {
      toggledString += String.fromCharCode(charCode + 32);
      // console.log(toggledString);
      

    } else if (charCode >= 97 && charCode <= 122) {
      toggledString += String.fromCharCode(charCode - 32);

    } else {
      toggledString += str[i]
    }
  }
  console.log(toggledString);
}
toggleToString("Hello World!");