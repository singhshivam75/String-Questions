// Write a js program to copy one string to another string.

function copyString(str) {
  let copidString = "";
  for (let i = 0; str[i] != undefined; i++) {
    copidString += str[i];
    
  }
  console.log('Copied String:', copidString);
  console.log('Original String:', str);
  
}
copyString("Hello, World!");


