// function mergeArray(...arr) {
//   let mergedArray = [];
//   let index = 0;
//   console.log(arr, 'arrays to merge');
  
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element, 'current array element');

//     for (let j = 0; j < element.length; j++) {
//     console.log(element[j], 'current element value');
//     mergedArray[index] = element[j];
//     index++;
//   }
//   }

//   console.log(mergedArray, 'final merged array');
//   return mergedArray;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// let arr4 = [10, 11, 12];
// mergeArray(arr1, arr2, arr3, arr4);


// console.log('------------------');


// function addTwoArray(arr1, arr2) {
//   let mergeArray = [];
//   let index = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i],'array element');
//     console.log(index,'array value')
//     mergeArray[index] = arr1[i];
//     index++; 
//   }
// console.log(mergeArray,'merge array after first loop');

//   for (let j = 0; j < arr2.length; j++) {
//     console.log(arr2[j],'array element');
//     console.log(index,'array value')
//     mergeArray[index] = arr2[j];
//     index++;
//   }
//   console.log(mergeArray,'merge array after second loop');
// }

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50];
// addTwoArray(arr1, arr2);


// console.log('------------------');


// function mergeArray(arr1, arr2) {
//   let arr3 = [...arr1, ...arr2];
  
//   let mergedArray = [];
//   let index = 0;
//   for (let i = 0; i < arr3.length; i++) {
//     mergedArray[index] = arr3[i];
//     index++;
//   }
//   console.log(mergedArray, 'final merged array');
// }
// mergeArray([1, 2, 3], [4, 5, 6]);

// console.log('------------------');

// function mergeArray(arr1, arr2) {
//   let mergedArray = [...arr1, ...arr2];
//   console.log(mergedArray, 'final merged array');
// }
// mergeArray([1, 2, 3], [4, 5, 6]);

// console.log('------------------');

// function mergeArray(...arr) {
//   let mergedArray = [];
//   let index = 0;
//   console.log(arr, 'arrays to merge');
  
//   for (let i = 0; i < arr.length; i++) {
//     let newArray = arr[i];
//     for (let j = 0; j < newArray.length; j++) {
//       mergedArray[index] = newArray[j];
//       index++;
//       console.log(mergedArray, 'merged array after adding element');
//     }
//   }
  
//   console.log(mergedArray, 'final merged array');
  
// }
// mergeArray([1, 2, 3], [4, 5, 6], [7, 8, 9]);

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
]
console.log(arr, 'arrays to merge');

let mergedArray = [];
let index = 0;  

for (let i = 0; i < arr.length; i++) {
  let newArray = arr[i];
  console.log(newArray, 'current array to merge');
  
  for (let j = 0; j < newArray.length; j++) {
    mergedArray[index] = newArray[j];
    console.log(newArray[j], 'current element value');
    console.log(index, 'current index value');
    index++;
    console.log(mergedArray, 'merged array after adding element');
  }
}
  console.log(mergedArray, 'merged array after processing current array');