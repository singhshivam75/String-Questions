// Write a js program to copy one string to another string.

function calculateLength(str) {
  let length = 0;
  for (const i in str) {
    length++;
  }

  return length;
}

// function copyString(str) {
//   let copidString = "";
//   for (let i = 0; i < calculateLength(str); i++) {
//     copidString += str[i];
    
//   }
//   console.log('Copied String:', copidString);
//   console.log('Original String:', str);
  
// }

// const newStr = "Hello Shivam";
// copyString(newStr);


//     *****************************     //

// let str1 = "Shivam Singh";
// let str2 = "";

// let i = 0;
// while (i < calculateLength(str)) {
//   str2 += str1[i];
//   i++;
// }
// console.log(str2);
// console.log(str1);


//     *****************************     //

function copyString2(str) {
  let copidString = '';

  for (let i = 0; i < calculateLength(str); i++) {
    copidString += str[i];
  }
  return copidString;
}

let str = "Hello Shivam Singh";
const result = copyString2(str);
console.log(result);
console.log(str);

