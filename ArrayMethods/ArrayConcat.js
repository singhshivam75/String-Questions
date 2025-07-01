// concat() - Merge arrays

function mergeArrays(...arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = [...result, ...arr[i]];
    
  }
  console.log(result);
  
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = [7, 8, 9];

mergeArrays(arr1, arr2, arr3, arr4);



//     *****************************     //

function myConcat(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result[result.length] = arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    result[result.length] = arr2[j];
  }

  return result;
}

let a = [1, 2];
let b = [3, 4];

let combined = myConcat(a, b);
console.log(combined); // [1, 2, 3, 4]
console.log(a);        // [1, 2] 
