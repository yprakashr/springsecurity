class Point {
  constructor(public x: number, public y: number) {}

  disp() {
    console.log(this.x);
    console.log(this.y);
  }
}

let pt = new Point(2, 5);

pt.disp();
