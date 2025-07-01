// Write a js program to count occurrences of a character in given string.

function findAllOccurrences(str) {

  let countChar = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (countChar[char]) {
      countChar[char]++;
      
    } else {
      countChar[char] = 1;
    }
  }
  console.log(countChar);
}

let str = "Shivam Singh";
findAllOccurrences(str);    // Output: { S: 2, h: 2, i: 2, v: 1, a: 1, m: 1, n: 1, g: 1 }



//     *****************************     //

// function countAllOccurrence(str) {
//   let result = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (result[char]) {
//       result[char] += 1;
//     } else {
//       result[char] = 1;
//     }
//   }

//   for (const key in result) {
//     console.log(key + " = " + result[key]);
//   }
// }

// let str = "Shivam Singh";
// countAllOccurrence(str);
