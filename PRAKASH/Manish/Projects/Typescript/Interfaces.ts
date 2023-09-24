interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hello " + customer.firstName;
  },
};

console.log("--------Customer Object--------- ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!! "+employee.firstName;
  },
};
console.log("---------Employee Object---------- ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());

