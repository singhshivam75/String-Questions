function myShift(arr) {
  const first = arr[0];
  arr[0] = arr[1];
  arr[1] = arr[2];
  arr[2] = arr[3];
  arr.length = 3;
  return first;
}

const removed = myShift(fruits);

console.log(removed); // "Banana"
console.log(fruits);  // ["Orange", "Apple", "Mango"]


