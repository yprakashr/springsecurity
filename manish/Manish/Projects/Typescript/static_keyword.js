var staticMem = /** @class */ (function () {
    function staticMem() {
    }
    staticMem.disp = function () {
        console.log("id is: " + staticMem.id);
    };
    return staticMem;
}());
staticMem.id = 20;
staticMem.disp();
