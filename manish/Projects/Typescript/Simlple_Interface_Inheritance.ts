interface Person {
  age: number;
}
interface Musician extends Person {
  instrument: string;
}
var drummer = <Musician>{};
drummer.age = 2;
drummer.instrument = "guitar";

console.log("age of drummer: " + drummer.age);
console.log("instrument of drummer: " + drummer.instrument);
