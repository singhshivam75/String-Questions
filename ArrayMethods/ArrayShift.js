function myShift(arr) {
  const first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return first;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const removed = myShift(fruits);

console.log(removed); // "Banana"
console.log(fruits);  // ["Orange", "Apple", "Mango"]



