// Write a js program to convert lowercase string to uppercase.

// function lowerToUpperCase(str) {
//   let uppercaseString = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);

//     if (charCode >= 97 && charCode <= 122) { 
//       uppercaseString += String.fromCharCode(charCode - 32); 
//     } else {
//       uppercaseString += str[i];

//     }
//   }
//   console.log(uppercaseString);
// }
// lowerToUpperCase("hello world!");

function lowerToUpperCase(str) {

  let uppercaseString = "";
  let uppercase = {
    a: 'A', b: 'B', c: 'C', d: 'D', e: 'E',
    f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
    k: 'K', l: 'L', m: 'M', n: 'N', o: 'O',
    p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T',
    u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y',
    z: 'Z'
  };

  for (let i = 0; str[i] != undefined; i++) {
    let words = str[i];

    if (uppercase[words]) {
      uppercaseString += uppercase[words];
    } else {
      uppercaseString += words;
    }
    
  }
  console.log(uppercaseString);
  
}
lowerToUpperCase("hello world!");
