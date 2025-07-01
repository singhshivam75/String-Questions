// Write a js program to search all occurrences of a character in given string.

// function findAllOccurrences(str) {

//   let countChar = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (countChar[char]) {
//       countChar[char]++;
//     } else {
//       countChar[char] = 1;
//     }
//   }
//   let result = [];

//   for (let char in countChar) {
//     if (countChar[char] > 1) {
//       result[char] = countChar[char];
//     }
//   }
//   console.log(countChar);
//   console.log(result);

// }
// let str = "Shivam Singh";
// findAllOccurrences(str);



//     *****************************     //

function searchAllOccurrences(str) {
  let countChar = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (countChar[char] === undefined) {
      countChar[char] = 1;
    } else {
      countChar[char]++;
    }
  }

  let result = {};
  for (const key in countChar) {
    if (countChar[key] > 1) {
      result[key] = countChar[key];
    }
  }

  for (const key in result) {
    console.log("'" + key + "' appears " + result[key] + " times.");
  }
}

let words = "Shivam Singh";
searchAllOccurrences(words);
