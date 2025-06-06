// Write a js program to trim both leading and trailing white space characters from given string.

function trimWhitespace(str) {

  let start = 0;
  let end = str.length - 1;

  start <= end;
  while (str[start] <= ' ') {
    start++;
  }

  end >= start;
  while (str[end] <= ' ') {
    end--;
  }

  // while (start <= end && str[start] <= ' ')
  //    start++;

  // while (end >= start && str[end] <= ' ')
  //    end--;

  let result = '';
  console.log(`Start index: ${start}, End index: ${end}`);


  for (let i = start; i <= end; i++)
    result += str[i];

  console.log(result);


  // let newString = '';
  // let start = 0;

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== ' ') {
  //     start = i;
  //     break;
  //   }
  // } 
  // for (let i = str.length - 1; i >= 0; i--) {
  //   if (str[i] !== ' ') {
  //     newString = str.slice(start, i + 1);
  //     break;
  //   }
  // }
  // console.log(`Trimmed string: "${newString}"`);

}
let str = "   Hello, World!   ";
trimWhitespace(str);