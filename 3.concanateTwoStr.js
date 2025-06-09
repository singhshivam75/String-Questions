// Write a js program to concatenate two strings.

// function concatenateTwoStrings(str1, str2) {
//   let mergedString = "";
//   for (let i = 0; i < str1.length; i++) {
//     mergedString += str1[i];
//   }
//   for (let j = 0; j < str2.length; j++) {
//     mergedString += str2[j];

//   }
//   console.log('Concatenated String:', mergedString);
//   console.log('First String:', str1);
//   console.log('Second String:', str2);
// }
// concatenateTwoStrings("Hello, ", "Shivam!");


function concatenateTwoStrings(...strings) {
  let mergedString = "";
  for (let str of strings) {
    console.log('Current String:', str);

    for (let char of str) {
      mergedString += char;
    }
  }
  console.log('Concatenated String:', mergedString);
  console.log('Original Strings:', strings);

}


// "string 1 " + "string 2 "
concatenateTwoStrings("Hello, ", "Shivam!", " How are you?");


let name = {
  str1: "Shivam",
  str2: "Shivam",
  str3: "Shivam",
  str4: "Shivam",
  str5: "Shivam"
}
// console.log(name.str1 + name.str2);


// console.log(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4 + ' ' + str5);
