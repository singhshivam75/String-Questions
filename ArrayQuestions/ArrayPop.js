function removeLastElement(arr) {

  arr.length = arr.length - 1;
  console.log(arr);

}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
removeLastElement(fruits); // Output: ["Banana", "Orange", "Apple"]




// or

function myPop(array) {
  if (array.length === 0) return undefined;

  const last = array[array.length - 1];
  array.length--; 
  return last;
}

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
const removed = myPop(newFruits);

console.log(removed);  // "Mango"
console.log(fruits);   // ["Banana", "Orange", "Apple"]
