class car {
  name: string;

  constructor(carName: string) {
    this.name = carName;
  }

  disp(): void {
    console.log("car name: " + this.name);
  }
}

var obj = new car("Baleno");
console.log("accessing property: " + obj.name);
obj.disp();
console.log("printing class: " + obj);
