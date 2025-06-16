// Write a js program to reverse order of words in a given string.

function reverseWordsInString(str) {
  let words = [];
  let word = '';

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];
    // console.log(char);


    if (char === ' ' || i === str.length) {
      // console.log(words);

      if (word.length > 0) {
        words.push(word);
        // console.log(words);

        word = '';
        // console.log(word);

      }
    } else {
      word += char;
      // console.log(word);

    }
  }

  let result = '';
  for (let i = words.length - 1; i >= 0; i--) {
    // console.log(words[i]);

    result += words[i];
    // console.log(result);

    if (i !== 0) {
      result += ' ';
    }
  }
  console.log(result);
}
let str = "Hello World!";
reverseWordsInString(str);