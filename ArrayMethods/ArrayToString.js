
function arrayToString(arr) {

  let element = arr[2];

  for (let i = 0; arr[i] !== undefined; i++) {
    element += arr[i];
    // console.log(element);

    if (arr[i + 1] !== undefined) {
      element += ", ";
    }

    // or

    // if (i < arr.length - 1) {
    //   element += ", ";
    // }
  }
  console.log(element);

}
let myArr = ["Hello", "My", "Name", "is", "Shivam"];
arrayToString(myArr); 