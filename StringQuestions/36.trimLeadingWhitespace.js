// Write a js program to trim leading white space characters from given string.

// not solved

function trimleadingWhitespace(str) {

  let start = 0;
  let result = '';

  while (start < str.length && (
    str[start] === ' ' || str[start] === '/n' || str[start] === '/r'
  )) {
    start++;
    console.log(start);
    
  }
  console.log(start);

  for (let i = start; i < str.length; i++) {
    result += str[i];
    
  }
  
  console.log(result);
  
}
let str = "   /n/r   Hello Shivam";
trimleadingWhitespace(str);