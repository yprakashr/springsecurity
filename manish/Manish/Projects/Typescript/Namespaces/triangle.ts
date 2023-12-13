/// <reference path="IShape.ts" />
namespace Drawing {
  export class triangle implements IShape {
    draw() {
      console.log("drawing triangle");
    }
  }
}
