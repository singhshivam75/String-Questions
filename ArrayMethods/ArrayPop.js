// pop() – Remove last item

function arrayLength(arr) {
  let count = 0;

  for (const i of arr) {
    count++;
  }
  return count;
}

function arrayPopMethod(arr) {
  let length = arrayLength(arr);

  for (let i = 0; i < length - 1; i++) {
    // console.log(arr);
    }
  arr.length = length - 1; 
  console.log(arr);
}

let numbers = [1, 2, 3, 4, 5];
arrayPopMethod(numbers);