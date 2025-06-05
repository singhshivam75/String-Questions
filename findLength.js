// Write a js program to find length of a string.

function findLength(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], 'character at index', i);
    count++;
  }
  return count;
}
console.log('Length of the string:', findLength("Hello, World!"));
