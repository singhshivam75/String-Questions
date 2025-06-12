// Write a js program to convert uppercase string to lowercase.


function upperToLowerCase(str) {

  let lowercaseString = '';
  let lowercase = {
    A: 'a', B: 'b', C: 'c', D: 'd', E: 'e',
    F: 'f', G: 'g', H: 'h', I: 'i', J: 'j',
    K: 'k', L: 'l', M: 'm', N: 'n', O: 'o',
    P: 'p', Q: 'q', R: 'r', S: 's', T: 't',
    U: 'u', V: 'v', W: 'w', X: 'x', Y: 'y',
    Z: 'z'
  }

  for (let i = 0; str[i] !== undefined; i++) {
    let words = str[i];
    // console.log(words);

    if (lowercase[words]) {
      lowercaseString += lowercase[words];
    } else {
      lowercaseString += words;
    }

  }
  console.log(lowercaseString);

}

upperToLowerCase("HELLO sHIVAM");


// function upperToLowerCase(str) {
//   let lowercaseString = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);

//     if (charCode >= 65 && charCode <= 90) {
//       lowercaseString += String.fromCharCode(charCode + 32);  // make own charcode function

//     } else {
//       lowercaseString += str[i];
//     }
//   }
//   console.log(lowercaseString);
// }
// let str1 = "HELLO WORLD!";
// let str2 = "Hello World!";
// upperToLowerCase(str1);
// upperToLowerCase(str2);