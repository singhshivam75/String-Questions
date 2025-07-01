// indexOf() - Find index of a value

function findIndexValue(arr, value) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(`"${value}" found on index: ${i}`);
      return true;
    }
  }
  console.log(`"${value}" index not found`);
  return false;
}

let words = ["Hello", "Shivam", "How", "are", "you"];

findIndexValue(words, "Shivam"); 
findIndexValue(words, "you");   
findIndexValue(words, "test");  
