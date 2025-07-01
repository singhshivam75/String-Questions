function removeAt(arr, indexToRemove) {
  let i = indexToRemove;

  while (arr[i + 1] !== undefined) {

    arr[i] = arr[i + 1];
    i++;    
  }

  let count = 0;
  while (arr[count] !== undefined) count++;

  arr[count - 1] = undefined; 
  arr.length = count - 1;    
   
}

let fruits = ["Banana", "Orange", "Apple", "Mango"];

removeAt(fruits, 2); 

console.log(fruits); // ["Banana", "Orange", "Mango"]
