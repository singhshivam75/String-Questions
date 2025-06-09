/*
*****
 ****
  ***
   **
    *
*/

function starPatternTriangle() {
  let n = 5;

  for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
      if (j < i) {
        row += ' ';
      } else {
        row += '*';
      }
    }

    console.log(row);
  }
}

starPatternTriangle();
