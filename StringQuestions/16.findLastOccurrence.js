// Write a js program to find last occurrence of a character in a given string.

// function findLastOccurrence(str, char) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] === char) {
//       console.log(`Last occurrence of '${char}' is at index ${i}`);
//       return;
      
//     }    
//   }
//   console.log(`Character '${char}' not found in the string`);
  
// }
// let str = "Shivam Singh singh";
// let char = "i"; 
// findLastOccurrence(str, char);



//     *****************************     //

function lastOccurrence(str, char) {
  let i = str.length - 1;

  while (i >= 0) {
    if (str[i] === char) {
      console.log(`Last occurrence of '${char}' is at index ${i}`);
      return;
    }
    i--;
  }

  console.log(`Character '${char}' not found in the string`);
}

let str = "Shivam Singh singh";
let char = "i";
lastOccurrence(str, char);
