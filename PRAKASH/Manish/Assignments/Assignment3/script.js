//initially before selecting the option setting the districts to be hidden

// selecting state dropdown
var a = document.getElementById("state");
// selecting district dropdown
var b = document.getElementById("dist");
// console.log(a.value);

//condition to check selected option is "select"
if (a.value == "") {
  b.style.display = "none";
} else {
  b.style.display = "inline";
}

// click function to hide the districts on selecting option
function myFunction() {
  var x = document.getElementById("state");
  var y = document.getElementById("dist");
  console.log(x.value);
  if (x.value == "") {
    y.style.display = "none";
  } else {
    y.style.display = "inline";
  }
}
