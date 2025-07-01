// includes() - Check if value exists

// function checkIfValueExists(str, value) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === value) {
//       console.log("value exists");
//       return; 
//     }
//   }
//   console.log("value not exist");
// }
// let str = ["Hello", "Shivam", "How", "are", "you"];
// let value = "Shivam";
// checkIfValueExists(str, value)




  // ********************   //

// function checkIfValueExists(str, value) {
//   let found = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === value) {
//       found = true;
//       break;
//     }
//   }

//   if (found) {
//     console.log("value exists");
//   } else {
//     console.log("value not exist");
//   }
// }
// let str1 = ["Hello", "Shivam", "How", "are", "you"];
// let value1 = "Shivam";
// checkIfValueExists(str1, value1)






//  **************************   //

function myIncludesVerbose(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`${target} is at index ${i}`);
      return true;
    }
  }
  console.log("value not exist");
  return false;
}

let str3 = ["Hello", "Shivam", "How", "are", "you"];
let value3 = "Shivam";
myIncludesVerbose(str3, value3);