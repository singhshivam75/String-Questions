// Write a js program to count total number of words in a string.


// function countTotalWords(str) {
//   let totalWords = 0;

//   for (let i = 0; str[i] !== undefined; i++) {
//     const element = str[i];
//     if (element === (" ")) {
//       totalWords++;
//     }
//   }
//   let result = totalWords + 1;
//   console.log(result);

// }
// let str = "How are you doing today?";
// countTotalWords(str);



//     *****************************     //

// function countWords(str) {
//   let inWord = false;
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char !== ' ' && inWord === false) {
//       inWord = true;
//       count++;
//     } else if (char === ' ') {
//       inWord = false;
//     }
//   }
//   console.log("Total words:", count);
// }

// let str = "  Hello   world  this is JavaScript ";
// countWords(str); 
