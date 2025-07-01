
function joinArrayElements(fruits, separator) {
  let result = '';
  for (const fruit of fruits) {
    if (result) {
      result += separator;
    }
    result += fruit;
  }
  console.log(result);

}

let fruits = ["Banana", "Orange", "Apple", "Mango"];
joinArrayElements(fruits, " * "); // Output: "Banana * Orange * Apple * Mango"