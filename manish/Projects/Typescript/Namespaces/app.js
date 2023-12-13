/// <reference path="IShape.ts" />  
var Drawing;
(function (Drawing) {
    var circle = /** @class */ (function () {
        function circle() {
        }
        circle.prototype.draw = function () {
            console.log("Drawing circle");
        };
        return circle;
    }());
    Drawing.circle = circle;
})(Drawing || (Drawing = {}));
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
/// <reference path="IShape.ts" />
/// <reference path="circle.ts" />
/// <reference path="triangle.ts" />
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.circle());
drawAllShapes(new Drawing.triangle());
