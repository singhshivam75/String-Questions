// Write a js program to count total number of words in a string.


function countTotalWords(str) {
  let totalWords = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    const element = str[i];
      if (element === (" ")) {
    totalWords++;
  }
  }
  let result = totalWords + 1;
  console.log(result);
  
}
let str = "How are you doing today?";
countTotalWords(str);