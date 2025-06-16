function CopyWithinElement(array) {
  let result = [];
  let index = 0; 
  for (let i = 0; i < array.length; i++) {
    if (i === 2) {
      result[index] = array[0];
    } else {
      result[index] = array[i];
    }
    index++;
  }
  console.log(result);
}

let fruits = ["Banana", "Orange", "Apple", "Mango"];
CopyWithinElement(fruits); // Output: ["Banana", "Orange", "Banana", "Mango"]


