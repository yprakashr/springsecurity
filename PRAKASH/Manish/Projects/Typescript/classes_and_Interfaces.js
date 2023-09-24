var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.show = function () {
        console.log("vehicle type:" + this.type);
        console.log("vehiclke brand: " + this.brand);
    };
    return car;
}());
var obj = new car();
obj.brand = "BMW";
obj.type = "Car";
obj.show();
