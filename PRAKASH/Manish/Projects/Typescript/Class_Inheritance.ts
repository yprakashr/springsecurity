class shape {
  area: number;

  constructor(a: number) {
    this.area = a;
  }

  disp(): void {
    console.log("Area is: " + this.area);
  }
}

class circle extends shape {}

var obj = new circle(20);
obj.disp();
