var car = /** @class */ (function () {
    function car(carName) {
        this.name = carName;
    }
    car.prototype.disp = function () {
        console.log("car name: " + this.name);
    };
    return car;
}());
var obj = new car("Baleno");
console.log("accessing property: " + obj.name);
obj.disp();
console.log("printing class: " + obj);
