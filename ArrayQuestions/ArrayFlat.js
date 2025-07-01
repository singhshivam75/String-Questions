function flatArrayElements(arr) {
  let mergedArray = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    let newArray = arr[i];
    for (let j = 0; j < newArray.length; j++) {
      
      mergedArray[index] = newArray[j];
      index++;
      
    }
  }

  return mergedArray;
}
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];
let result = flatArrayElements(arr);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]