/*
    *
   ***
  *****
 *******
*********

*/


function starPatternTriangle(n) {
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
  console.log(star);
}
  
}
starPatternTriangle(5);