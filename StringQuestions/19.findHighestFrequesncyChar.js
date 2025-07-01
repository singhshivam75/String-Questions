// Write a js program to find highest frequency character in a string.

function findHighestFrequencyChar(str) {

  let count = 0;
  let highestChar = '';

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let currentCount = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === currentChar) {
        currentCount++;
        // console.log(currentCount)
      }
    }
    
    if (currentCount > count) {
      count = currentCount;
      highestChar = currentChar;
    }

  }
  console.log("Highest Frequency Character: " + highestChar);
  console.log("Highest Frequency Count: " + count);

}
let str = "Shivamh Singh Singh";
findHighestFrequencyChar(str);  // Output: Highest Frequency Character: h


