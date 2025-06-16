/*
1
12
123
1234
12345
*/


function starPatternTriangle(n) {
  
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
}
starPatternTriangle(5);
