// lastIndexOf() - Find Last index of a value

function findLastIndexValue(arr, value) {

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      console.log(`"${value}" found on index: ${i}`);
      return true;
    }
  }
  console.log(`"${value}" index not found`);
  return false;
}

let words = ["Hello", "Shivam", "How", "are", "Shivam"];

findLastIndexValue(words, "Shivam")
findLastIndexValue(words, "How")
findLastIndexValue(words, "test")
