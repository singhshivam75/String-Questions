// Write a js program to count frequency of each character in a string.

function countFrequencyOfChars(str) {
  const freq = {};

  for (let char of str) {
    
    if (char !== ' ') {      
      freq[char] = (freq[char] || 0) + 1;
            
    }
  }

  console.log(freq);
};
let str = "Shivam Singh";
countFrequencyOfChars(str);



