function sliceTheArrayElement(arr, start, end) {
  const result = [];
  let i = start;
  let j = 0;

  while (i < end && arr[i] !== undefined) {
    
    result[j] = arr[i];
    i++;
    j++;
  }

  console.log(result);
  
}


let array = [1, 2, 3, 4, 5];
sliceTheArrayElement(array, 1, 3); // Output: [2, 3]