var person = { fName: "man", lName: "mac", sayHi: function () { } };
person.sayHi = function () { return person.fName; };
console.log(person.sayHi());
