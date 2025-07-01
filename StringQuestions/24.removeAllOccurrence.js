// Write a js program to remove all occurrences of a character from string.

// function removeAllOccurrences(str, charToRemove) {
//   let newString = '';

//   for (const char of str) {

//     if (char != charToRemove) {
//       newString += char;
//     }

//   }
//   console.log(newString);
// }
// let str = "Hello World!";
// let charToRemove = 'l';
// removeAllOccurrences(str, charToRemove);



//     *****************************     //

function removeAllOccurrences2(str, target) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    if (str[i] !== target) {
      result += str[i];
    }
  }

  console.log("Result:", result);
}

let str = "Hello Shivam, How are you!"
let target = "o";
removeAllOccurrences2(str, target);