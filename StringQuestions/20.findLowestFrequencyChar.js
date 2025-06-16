// Write a js program to find lowest frequency character in a string.

function findLowestFrequencyChar(str) {
  const freq = {};

  for (let char of str) {
    if (char !== ' ') {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  let minFreq = Infinity;
  let lowestChar = '';

  for (let char in freq) {
    if (freq[char] < minFreq) {
      minFreq = freq[char];
      lowestChar = char;
    }
  }

  console.log("Lowest Frequency Character: " + lowestChar);
  console.log("Lowest Frequency Count: " + minFreq);
}

let str = "Shivam Singh";
findLowestFrequencyChar(str);
