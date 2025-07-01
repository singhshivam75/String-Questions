function customToSpliced(arr, start, deleteCount) {

  const result = [];
  let i = 0;
  let j = 0;

  while (i < start) {
    result[j] = arr[i];
    i++;
    j++;
  }

  i += deleteCount;

  while (arr[i] !== undefined) {
    result[j] = arr[i];
    i++;
    j++;
  }

  return result;
}

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = customToSpliced(months, 0, 1);

console.log(spliced); // ["Feb", "Mar", "Apr"]
console.log(months);  // ["Jan", "Feb", "Mar", "Apr"]
