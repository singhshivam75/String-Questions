const fruits = ["Banana", "Orange", "Apple", "Mango"];

function myUnshift(arr, newItem) {
  arr[4] = arr[3];
  arr[3] = arr[2];
  arr[2] = arr[1];
  arr[1] = arr[0];
  arr[0] = newItem;
}

myUnshift(fruits, "Papaya");

// console.log(fruits); 
// ["Papaya", "Banana", "Orange", "Apple", "Mango"]




// or 

function addItemAtFirst(arr, newItem) {
  let i = 0;
  while (arr[i] !== undefined) i++;
// console.log(arr);

  while (i > 0) {
    arr[i] = arr[i - 1];
    i--;
    // console.log(arr);
    
  }

  arr[0] = newItem;
  console.log(arr);  // Output: [ 'Papaya', 'Banana', 'Orange', 'Apple', 'Mango' ]
  
}

let freshFruits = ["Banana", "Orange", "Apple", "Mango"];
addItemAtFirst(freshFruits, "Papaya")