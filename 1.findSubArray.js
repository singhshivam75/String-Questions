// Write a js program to find length of a string.

function findLength(str) {
  // console.log(str);
  let result = 0;
  
  for (let i = 0; str[i] != undefined; i++) {
    result++;
  }

  console.log(result);
  
}
findLength("Shivam Singh")