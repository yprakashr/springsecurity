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
