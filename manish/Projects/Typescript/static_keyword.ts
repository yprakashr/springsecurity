class staticMem {
  static id: number;

  static disp() {
    console.log("id is: " + staticMem.id);
  }
}

staticMem.id = 20;
staticMem.disp();
