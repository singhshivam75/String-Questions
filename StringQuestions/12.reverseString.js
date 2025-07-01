// Write a js program to find reverse of a string.


function reverseString(str) {
  let reversed = "";
  let i = 0;

  while (str[i] !== undefined) {
    reversed = str[i] + reversed;  
    i++;
  }

  console.log(reversed);
}

reverseString("Hello, World!");



//     *****************************     //

// function reverseString(str) {
//   let reversedString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   console.log(reversedString);
  
// }
// reverseString("Hello, World!");



//     *****************************     //

// function reverseString2(str) {
//   let reversed = "";
//   let i = str.length - 1;
//   while (i >= 0) {
//     reversed = reversed + str[i];
//     i--;
//   }
//   console.log("Reversed:", reversed);
// }

// let str = "Hello Shivam!";
// reverseString2(str);