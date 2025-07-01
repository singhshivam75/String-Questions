function arrayReverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    
    let result = arr[start];
    arr[start] = arr[end];
    arr[end] = result;

    start++;
    end--;
  }
  return arr;
  
}
let nums = [10, 20, 30, 40, 50];
console.log(arrayReverse(nums));
