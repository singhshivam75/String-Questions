// Write a js program to count total number of vowels and consonants in a string.


function countVowelsAndConsonants(str) {
  let totalVowels = 0;
  let totalConsonants = 0;

  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
      
      let isVowel = false;
      for (let j = 0; j < vowels.length; j++) {
        if (char === vowels[j]) {
          
          isVowel = true;
        }
      
    }
    if (isVowel) {
      totalVowels++;
    } else {
      totalConsonants++;
    }
}
}
console.log(totalVowels, totalConsonants);

}

let str = "How are you doing today?";
countVowelsAndConsonants(str);