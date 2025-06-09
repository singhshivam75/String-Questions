// Write a js program to find first occurrence of a word in a given string.

function findFirstOccurrenceWord(str, word) {
  // console.log(str);

  let newString = '';
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log(char);

    if (char === ' ' || i === str.length) {
      if (newString > 0) {
        result.push(newString);
        // console.log(result);
        console.log(newString);
        
        
      }
    }
    
    // if (newString === ' ') {
    //   result += newString
    // }
    // console.log(result);
    
    
    
  }
  
}

let str = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
let word = "dog";
findFirstOccurrenceWord(str, word);



/*
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
*/