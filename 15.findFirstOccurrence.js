// Write a js program to find first occurrence of a character in a given string.

function findFirstOccurrence(str, char) {

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      console.log(`First occurrence of '${char}' is at index: ${i}`);
      return; 
    }
  }
  console.log(`Character '${char}' not found in the string.`);

}
let str = "Shivam Singh"
let char = " ";
findFirstOccurrence(str, char);