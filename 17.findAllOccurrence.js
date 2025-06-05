// Write a C program to count occurrences of a character in given string.

function findAllOccurrences(str, char) {
  let countChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      countChar++;      
    } 
    else {
      continue;
    }
  }
  if (countChar === 0) {
    console.log(char, "not found");
  } else {
    console.log(countChar, "occurrences of", char, "times");
  }
  
}
let str = "Shivam Singh";
let char = "S";
findAllOccurrences(str, char);