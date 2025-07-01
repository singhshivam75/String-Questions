// Write a js program to find lowest frequency character in a string.

// function findLowestFrequencyChar(str) {
//   const freq = {};

//   for (let char of str) {
//     if (char !== ' ') {
//       freq[char] = (freq[char] || 0) + 1;
//     }
//   }

//   let minFreq = Infinity;
//   let lowestChar = '';

//   for (let char in freq) {
//     if (freq[char] < minFreq) {
//       minFreq = freq[char];
//       lowestChar = char;
//     }
//   }

//   console.log("Lowest Frequency Character: " + lowestChar);
//   console.log("Lowest Frequency Count: " + minFreq);
// }

// let str = "Shivam Singh";
// findLowestFrequencyChar(str);



//     *****************************     //

function lowestFreqCharacter(str) {
  let freq = {}; 

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  let minFreq = Infinity;
  let minChar = null;

  for (let key in freq) {
    if (freq[key] < minFreq) {
      minFreq = freq[key];
      minChar = key;
    }
  }

  console.log("Lowest frequency character:", minChar, "→", minFreq);
}

let str1 = "Shivam Singh";
lowestFreqCharacter(str1);