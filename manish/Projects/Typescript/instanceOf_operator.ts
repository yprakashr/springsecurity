class A {
  num = 13;
  showNum(): void {
    console.log("num: " + this.num);
  }
}

var obj1 = new A();
console.log(obj1.num);
obj1.showNum();
console.log(obj1 instanceof A); 
