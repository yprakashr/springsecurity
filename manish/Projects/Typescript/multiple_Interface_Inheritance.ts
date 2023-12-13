interface p1 {
  id: number;
}
interface p2 {
  name: string;
}
interface c1 extends p1, p2 {}

//method 1 initializing
var c2 = <c1>{};
c2.id = 23;
c2.name = "manish";
console.log("c2 name: " + c2.name);
console.log("c2 id: " + c2.id);

//method 2 initializing
var c3: c1 = { id: 2, name: "ashish" };
console.log("c3 name: " + c3.name);
console.log("c3 id: " + c3.id);
