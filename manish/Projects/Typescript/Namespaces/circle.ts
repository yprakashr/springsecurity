/// <reference path="IShape.ts" />  
namespace Drawing {
  export class circle implements IShape {
    draw() {
      console.log("Drawing circle");
    }
  }
}
