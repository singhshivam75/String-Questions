const nums = [1, 2, 3, 4, 5];

const dubble = nums.map(num => num * 2);
console.log(dubble); // Output: [2, 4, 6, 8, 10]

// or 

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]



// or 

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const fullName = persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

console.log(fullName);
