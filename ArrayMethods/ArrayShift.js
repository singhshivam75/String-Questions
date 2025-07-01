// shift() — Remove first item

function arrayLength(arr) {
  let count = 0;

  for (const i of arr) {
    count++;
  }
  return count;
}


function arrayShiftMethod(arr) {

  let length = arrayLength(arr);

  for (let i = 0; i < length; i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = length - 1;
  console.log(arr);
  
}
let numbers = [1, 5, 3, 4, 1, 2, 3];
arrayShiftMethod(numbers);  // [5, 3, 4, 1, 2, 3]



