// Write a js program to concatenate two strings.

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

concatenateTwoStrings("Hello, ", "Shivam!", " How are you?");

