// Write a js program to trim leading white space characters from given string.

function trimleadingWhitespace(str) {

  let start = 0;
  let result = '';

  while (start < str.length && str[start] === ' ') {
    start++;    
  }

  for (let i = start; i < str.length; i++) {
    result += str[i];
    
  }
  
  console.log(result);
  
}
let str = "     Hello Shivam    ";
trimleadingWhitespace(str);



//     *****************************     //

// function trimLeadingSpaces(str) {
//   let result = "";
//   let foundFirstChar = false;
//   let i = 0;

//   while (str[i] !== undefined) {
//     if (!foundFirstChar && str[i] === ' ') {
//       i++;
//       continue;
//     }

//     foundFirstChar = true;
//     result += str[i];
//     i++;
//   }

//   console.log("Trimmed string:", result);
// }

// let input = "    Hello World   ";
// trimLeadingSpaces(input);
