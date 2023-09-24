class car {
  name: string;
  weight: number;

  disp1() {
    console.log("car name: " + this.name);
  }

  disp2() {
    console.log("car weight: " + this.weight);
  }
}

function meth() {
  console.log("Hello world");
}

var obj1 = new car();

obj1.name = "suzuki";
obj1.weight = 2000;
obj1.disp1();
obj1.disp2();
meth();

var obj2 = new car();
obj2.name = "Honda";
obj2.weight = 3000;
obj2.disp1();
obj2.disp2();
meth();