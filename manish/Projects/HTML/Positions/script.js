var option = document.getElementById("option");
var box = document.getElementById("box1");

function show() {
  if (option.value == "static") {
    box.style.position = "static";
  } else if (option.value == "absolute") {
    box.style.position = "absolute";
  } else if (option.value == "relative") {
    box.style.position = "relative";
  }
}
