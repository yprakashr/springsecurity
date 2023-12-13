var body = document.getElementById("body");
var btn = document.getElementById("btn");
var h3 = document.getElementById("h3");
var r;
var g;
var b;
function func() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
  h3.innerHTML = `Color: rgb(${r}, ${g}, ${b})`;
  console.log(h3.innerHTML);
}
