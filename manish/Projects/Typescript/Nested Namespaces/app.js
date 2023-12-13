var outerMost;
(function (outerMost) {
    var outer;
    (function (outer) {
        var out = /** @class */ (function () {
            function out() {
            }
            out.prototype.disp = function (num) {
                console.log("number is: " + num);
            };
            return out;
        }());
        outer.out = out;
    })(outer = outerMost.outer || (outerMost.outer = {}));
})(outerMost || (outerMost = {}));
/// <reference path="outerMost.ts" />
var obj = new outerMost.outer.out();
obj.disp(25);
