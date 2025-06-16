// Write a js program to search all occurrences of a word in given string.

function findAllOccurrences(str, word) {
  let positions = []; 
  let i = 0;

  while (str[i] !== undefined) {
    let match = true;

    let j = 0;
    while (word[j] !== undefined) {
      if (str[i + j] !== word[j]) {
        match = false;
        break;
      }
      j++;
    }

    if (match) {
      positions[positions.length] = i;
    }

    i++; 
  }

   console.log(positions);
   ;
}


let str = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
let word = "dog";
findAllOccurrences(str, word); // Output: [43, 53]