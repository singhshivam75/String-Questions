/*
   *
  ***
 *****
*******
*/

// let star = '';
let n = 4;

for (let i = 1; i <= n; i++) {
  let star = '';
//  console.log(star);
  for (let j = 1; j <= n - i; j++) {
    star += ' ';
    // console.log(star);
    // console.log(j);
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    star += '*';
    // console.log(k);
    // console.log(star);  
  }
  // console.log(star);
}

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let line = '';
// // console.log(i);

//   // Add spaces
//   for (let s = 1; s <= n - i; s++) {
//     line += ' ';
//   }

//   // Add stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     line += '*';
//   }

//   console.log(line);
// }
