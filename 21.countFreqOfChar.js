// Write a js program to count frequency of each character in a string.

function countFrequencyOfChars(str) {
  const freq = {};

  for (let char of str) {
    // console.log(`Processing character: ${char}`);
    
    if (char !== ' ') {
      freq[char] = (freq[char] || 0) + 1;
      // console.log((freq[char] || 0) + 1);
      
      // console.log(`Character: ${char}, Frequency: ${freq[char]}`);
      
    }
  }

  console.log(freq);
  
  for (let char in freq) {
    // console.log(`${char}: ${freq[char]}`);
  }
}
let str = "Shivam Singh";
countFrequencyOfChars(str);