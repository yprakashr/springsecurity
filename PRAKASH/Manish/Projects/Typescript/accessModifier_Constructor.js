var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.disp = function () {
        console.log(this.x);
        console.log(this.y);
    };
    return Point;
}());
var pt = new Point(2, 5);
pt.disp();
