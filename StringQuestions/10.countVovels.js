// Write a js program to count total number of vowels and consonants in a string.


function countVowelsAndConsonants(str) {
  let totalVowels = 0;
  let totalConsonants = 0;

  let vowels = "aeiouAEIOU";

  for (let i = 0; str[i] !== undefined; i++) {
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
console.log(`
  Total Vowels: ${totalVowels}
  Total Consonants: ${totalConsonants}
  `);

}

let str = "How are you doing today?";
countVowelsAndConsonants(str);



//     *****************************     //

// function countVowelsConsonants(str) {

//   let vovels = 0;
//   let consonants = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     // console.log(char);

//     if (char >= "A" && char <= "Z" || char >= "a" && char <= "z") {

//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//         vovels++;
//       } else {
//         consonants++;
//       }
//     }

//   }
//   console.log(`
//     Total Vovels:  ${vovels}
//     Total Consonants:  ${consonants}
//   `);

// }

// let str = "Hello Shivam, How are you!"
// countVowelsConsonants(str);