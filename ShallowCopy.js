const user = {
  name: "Ali",
  skills: {
    frontend: "React",
    backend: "Node.js"
  }
};

const userCopy = {...user};

userCopy.name = "Ahmed";
userCopy.skills.frontend = "Vue.js";
userCopy.skills.backend = "Express.js";

console.log(user); 
console.log(userCopy);
