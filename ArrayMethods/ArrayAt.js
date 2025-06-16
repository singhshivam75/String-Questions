// function returnIndexedElement(fruits) {
//   let result = fruits[2];
//   console.log(result);
  
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// returnIndexedElement(fruits);   // Output: "Apple"



// or

function returnIndexedElement(fruits) {
  let result = '';
  let count = 0;

  for (const fruit of fruits) {
    if (count === 2) {
      result = fruit;
      // console.log(result);
      
      break;
    }
    count++;
  }
  console.log(result);
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
returnIndexedElement(fruits);   // Output: "Apple"