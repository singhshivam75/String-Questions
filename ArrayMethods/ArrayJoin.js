function arrayJoinMethod(arr, separator) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    
    if (i < arr.length - 1) {
      result += separator;
    }
  }
  return result;
}

let words = ["Shivam", "is", "learning"];

console.log(arrayJoinMethod(words, " "));   // "Shivam is learning"
console.log(arrayJoinMethod(words, "-"));   // "Shivam-is-learning"
console.log(arrayJoinMethod(words, ""));    // "Shivamislearning"