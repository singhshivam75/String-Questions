function arraySliceMethod(arr, start, end) {
  
  let result = [];
  for (let i = start;i < end && i < arr.length; i++) {
    result[result.length] = arr[i];
    
  }
  return result;
}

let numbers = [100, 200, 300, 400, 500];

console.log(arraySliceMethod(numbers, 1, 4)); // [200, 300, 400]
console.log(arraySliceMethod(numbers, 0, 2)); // [100, 200]
console.log(arraySliceMethod(numbers, 3, 10)); // [400, 500]
