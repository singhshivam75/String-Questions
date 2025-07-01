// push() – Add to end of array

function arrayLength(arr) {
  let count = 0;

  for (const i of arr) {
    count++;
  }
  return count;
}


// function arrayPushMethod(arr, newNum) {
  
//   let length = arrayLength(arr);
//   arr[length] = newNum;
  
// }

// let numbers = [1, 2, 3, 4, 5];
// let newNumber = 6
// arrayPushMethod(numbers, newNumber);

// console.log("Array after push:", numbers);



//   ********************************    //

function arrayPush(arr, value) {
  arr[arrayLength(arr)] = value;
  console.log(arr);
  
}
let arr = [1, 2, 3, 4];
let value = 5
arrayPush(arr, value)
