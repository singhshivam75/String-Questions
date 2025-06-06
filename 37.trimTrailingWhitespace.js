// Write a js program to trim trailing white space characters from given string.

// not solved

function trimTrailingWhitespace(str) {

  let result = '';
  let end = str.length - 1;

  end >= 0;
  while (end >= 0 && (
    str[end] <= ' ' || str[end] <= '/t' || str[end] <= '/n' || str[end] <= '/r'
  )) {
    end--;
    console.log(end);
  }
  // console.log(end);

  for (let i = 0; i <= end; i++) {
    result += str[i];
    console.log(result);
  }
  console.log(result);
  

}
let str = "Hello World   /r/n"
trimTrailingWhitespace(str);