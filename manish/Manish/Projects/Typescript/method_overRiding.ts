class printer {
  disp() {
    console.log("disp() from printer called");
  }
}

class stringPrinter extends printer {
  disp(): void {
    console.log("disp() from stringPrinter called");
  }
}

var obj1 = new printer();
obj1.disp();

var obj2 = new stringPrinter();
obj2.disp();
