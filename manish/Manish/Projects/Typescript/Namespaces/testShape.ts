/// <reference path="IShape.ts" />
/// <reference path="circle.ts" />
/// <reference path="triangle.ts" />

function drawAllShapes(shape: Drawing.IShape) {
  shape.draw();
}

drawAllShapes(new Drawing.circle());
drawAllShapes(new Drawing.triangle());
