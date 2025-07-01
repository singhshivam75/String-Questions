// function returnIndexedElement(fruits) {
//   let result = fruits[2];
//   console.log(result);
  
// }
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// returnIndexedElement(fruits);   // Output: "Apple"



// or

// fix this using for loop
function returnIndexedElement(fruits, index) {
  let result = '';
  let count = 0;
  
  for (const fruit of fruits) {
    // console.log(fruit);
    

    if (count === index) {
      result = fruit;
      
      break;
    }
    count++;
// console.log(count);

  }
  console.log(result,"shhaha====");
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
returnIndexedElement(fruits, 2);   // Output: "Apple"