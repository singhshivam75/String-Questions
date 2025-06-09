/*
1
12
123
1234
12345
123456
*/

let n = 6;
let star = '';

for (let i = 0; i <= n; i++) {
  star = ' ';
  // console.log(star);
  

  for (let j = 1; j <= i; j++) {
    star += j;
    
    // console.log(star);
    
  }
  console.log(star);
  
}
