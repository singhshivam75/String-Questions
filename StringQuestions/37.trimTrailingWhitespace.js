// Write a js program to trim trailing white space characters from given string.

// function trimTrailingWhitespace(str) {

//   let result = '';
//   let end = str.length - 1;

//   while (end >= 0 && str[end] <= ' ') {
//     end--;
//     // console.log(end);
//   }

//   for (let i = 0; i <= end; i++) {
//     result += str[i];
//     // console.log(result);
//   }
//   console.log(result);
  

// }
// let str = "Hello World           "
// trimTrailingWhitespace(str);



//     *****************************     //

function trimTrailingSpaces(str) {
  let result = "";
  let foundFirstChar = false;

  while (str.length >= 0) {
    if (!foundFirstChar && str[i] === ' ') {
      i--;
      continue;
    }

    foundFirstChar = true;
    result += str[i];
    i++;
  }

  console.log("Trimmed string:", result);
}

let input = "Welcome World   ";
trimTrailingSpaces(input);
