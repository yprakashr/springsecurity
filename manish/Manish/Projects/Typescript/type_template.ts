var person = {
  fName: "man",
  lName: "mac",
  sayHi: function () {} /* type template*/,
};
person.sayHi = () => person.fName;
console.log(person.sayHi());
