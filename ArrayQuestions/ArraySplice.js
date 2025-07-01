function spliceTheArrayElement(arr, index, insert1, insert2) {

  const result = [];  

  let i = 0;
  let j = 0;

  while (i < index) {
    result[j] = arr[i];
    i++;
    j++;
  }

  result[j++] = insert1;
  result[j++] = insert2;

  while (arr[i] !== undefined) {
    result[j] = arr[i];
    i++;
    j++;
  }

  console.log(result);
}


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

spliceTheArrayElement(fruits, 2, "kiwi", "mango");




// or 

// function spliceTheArrayElement(arr, index, item1, item2) {
//   const result = [];

//   for (let i = 0; i < index; i++) {
//     result[i] = arr[i];
//   }

//   result[index] = item1;
//   result[index + 1] = item2;

//   for (let i = index; arr[i] !== undefined; i++) {
//     result[i + 2] = arr[i];
//   }

//   return result;
// }
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// spliceTheArrayElement(fruits, 2, "kiwi", "mango"); // Output: ["apple", "banana", "kiwi", "mango", "cherry", "date", "elderberry", "kiwi", "mango"]