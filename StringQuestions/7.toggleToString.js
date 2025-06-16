// Write a js program to toggle case of each character of a string.

function toggleToString(str) {
  
  let toggledString = "";

   let uppercase = {
    a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
    f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
    k: 'K', l: 'L', m: 'M', n: 'N', o: 'O',
    p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T',
    u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y',
    z: 'Z'
  };

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
      toggledString += lowercase[words];
      // console.log(toggledString);
      
    } else if (uppercase[words]) {
      toggledString += uppercase[words];
      // console.log(toggledString);
      
    } else {
      toggledString += words;
    }
    
  }
  console.log(toggledString);
  
}
toggleToString("ShiVam SinGH")

// function toggleToString(str) {
//   let toggledString = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);

//     if (charCode >= 65 && charCode <= 90) {
//       toggledString += String.fromCharCode(charCode + 32);
      

//     } else if (charCode >= 97 && charCode <= 122) {
//       toggledString += String.fromCharCode(charCode - 32);

//     } else {
//       toggledString += str[i]
//     }
//   }
//   console.log(toggledString);
// }
// toggleToString("Hello World!");