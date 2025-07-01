function arrayLength(arr) {
  let length = 0;
  for (const i in arr) {
    length++;
  }

  return length;
}


function myConcatAll(...arrays) {
  let result = [];

  for (let i = 0; i < arrayLength(arrays); i++) {
    result = [...result, ...arrays[i]];
  }

  console.log(result);
  
}
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arr4 = [7, 8];
let arr5 = [9, 10];
let arr6 = [11, 12];
myConcatAll(arr1, arr2, arr3, arr4, arr5, arr6); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



// or


function returnConcatedElement(myBoys, myGirls) {

  let myChildren = [];

  let i = 0;
  while (arrayLength(myBoys) > i) {
    myChildren[i] = myBoys[i];
    i++;
  }
  let j = 0;
  while (myGirls[j] !== undefined) {
    myChildren[i] = myGirls[j];
    i++;
    j++;
  }
  console.log(myChildren);
  
}

let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
returnConcatedElement(myGirls, myBoys); // Output: "Cecilie, Lone, Emil, Tobias, Linus"




// or 

function myConcat(arr1, arr2) {
  const result = [];

  result[0] = arr1[0];
  result[1] = arr1[1];
  result[2] = arr2[0];
  result[3] = arr2[1];

  console.log(result, 'result');  // Output: [1, 2, 3, 4] 
  
}
let arr01 = [1, 2];
let arr02 = [3, 4];
myConcat(arr01, arr02);

