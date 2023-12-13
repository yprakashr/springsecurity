function show(a: number);
function show(b: String, c: number);
function show(b: String, c: number, d: boolean);
function show(b: String, c: number, d: boolean, e: null);
function show(d: any, e?: any, g?: any, f?: any) {
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
}
show(1);
show("ash", 3);
show("man", 2, true);
show("fgh", 34, false);
