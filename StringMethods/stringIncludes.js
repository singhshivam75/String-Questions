// includes() - Check if substring exists

function checkIfSubstringExist(str, subStr) {
  let strLength = str.length;
  let subLength = subStr.length;

  for (let i = 0; i <= strLength - subLength; i++) {
    let current = "";

    for (let j = 0; j < subLength; j++) {
      current += str[i + j];
      
    }
    
    if (current === subStr) {
      console.log(`"${subStr}" found at index ${i}`);
      return;
    }
  }

  console.log(`"${subStr}" not found`);
}

let str = "Hello Shivam, How are you!";
let substr = "How";
checkIfSubstringExist(str, substr);