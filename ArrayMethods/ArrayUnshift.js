// unshift() — Add item at start

function arrayUnshiftMethod(arr, newNum) {

  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
    
  }
  arr[0] = newNum;
  console.log(arr);
};

let numbers = [1, 5, 3, 4, 1, 2, 3];
let newNum = 9;
arrayUnshiftMethod(numbers, newNum);  //   [9, 1, 5, 3, 4, 1, 2, 3]