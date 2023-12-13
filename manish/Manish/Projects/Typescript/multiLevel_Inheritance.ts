class root {
  prop: string;
}

class stem extends root {}
class leaf extends stem {}

var obj = new leaf();
obj.prop = "green";
console.log("leaf prop: " + obj.prop);
