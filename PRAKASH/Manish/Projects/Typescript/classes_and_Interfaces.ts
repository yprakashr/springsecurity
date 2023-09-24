interface vehicle {
  type: string;
  brand: string;

  show(): void;
}

class car implements vehicle {
  type: string;
  brand: string;
  show(): void {
    console.log("vehicle type: " + this.type);
    console.log("vehicle brand: " + this.brand);
  }
}

var obj = new car();
obj.brand = "BMW";
obj.type = "Car";
obj.show();
