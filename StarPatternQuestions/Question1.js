/*
*
**
***
****
*****
*/

function starPatternTriangle(n) {
  
  for (let i = 0; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
starPatternTriangle(5)