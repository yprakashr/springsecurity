var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return "Hello " + customer.firstName;
    }
};
console.log("--------Customer Object--------- ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () {
        return "Hello!!! " + employee.firstName;
    }
};
console.log("---------Employee Object---------- ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
