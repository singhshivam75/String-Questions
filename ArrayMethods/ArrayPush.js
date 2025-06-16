
function addElementAtLast (fruits) {
  let index = 0;
  while (fruits[index] !== undefined) {
    index++;
  }

  fruits[index] = "Kiwi";

  console.log(fruits);
  
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
addElementAtLast(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]





// or

const freshFruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

freshFruits[freshFruits !== undefined] = 'Papaya';

console.log(freshFruits);
