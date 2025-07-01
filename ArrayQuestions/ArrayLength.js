function arrayLength(arr) {
  let length = 0;
  for (const i in arr) {
    length++;
  }

  return length;
}
let arr = [1, 2, 3, 4, 5, "Shivam"];
console.log(arrayLength(arr));

