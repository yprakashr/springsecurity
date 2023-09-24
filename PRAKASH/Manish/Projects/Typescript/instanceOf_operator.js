var A = /** @class */ (function () {
    function A() {
        this.num = 13;
    }
    A.prototype.showNum = function () {
        console.log("num: " + this.num);
    };
    return A;
}());
var obj1 = new A();
console.log(obj1.num);
obj1.showNum();
console.log(obj1 instanceof A);
