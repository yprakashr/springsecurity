/// <reference path="IShape.ts" />
var Drawing;
(function (Drawing) {
    var triangle = /** @class */ (function () {
        function triangle() {
        }
        triangle.prototype.draw = function () {
            console.log("drawing triangle");
        };
        return triangle;
    }());
    Drawing.triangle = triangle;
})(Drawing || (Drawing = {}));
