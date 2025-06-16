const user = {
  name: "John Doe",
  age: 30,
  skills: {
    frontend: "React",
    backend: "Node.js"
  }
};

const userCopy = structuredClone(user);
userCopy.name = "Shivam";
userCopy.skills.frontend = "Vue.js";
userCopy.skills.backend = "Express.js";
console.log(user);
console.log(userCopy);