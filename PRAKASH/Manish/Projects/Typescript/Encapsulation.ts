class A {
  id: number = 11;
  private name: string = "abc";

  disp() {
    console.log(this.id);
    console.log(this.name);
  }
}

var obj = new A();
console.log(obj.id);
// console.log(obj.name); //error as it is not accesible outside of class
obj.disp();
