// getting all required html elements
var Name = document.getElementById("name");
var Name1 = document.getElementById("name1");
var minAge = document.getElementById("minage");
var maxAge = document.getElementById("maxage");
var totalage = document.getElementById("totalage");
var Location = document.getElementById("location");
var location1 = document.getElementById("location1");
var NameAlert = document.getElementById("namealert");
var minAgeAlert = document.getElementById("minagealert");
var Img = document.getElementById("selectimg");

// function for validating name and displaying name on typing
function nameVal() {
  Name1.innerHTML = `Name: ${Name.value}`;

  if (!Name.value.match(/^[a-zA-Z\s]*$/)) {
    NameAlert.style.display = "inline";
  }

  if (Name.value.match(/^[a-zA-Z\s]*$/)) {
    NameAlert.style.display = "none";
  }
}

// function for validating age and displaying total age on typing
function ageVal() {
  totalage.innerHTML = `Total Age: ${
    Number(minAge.value) + Number(maxAge.value)
  }`;

  if (Number(minAge.value) > Number(maxAge.value)) {
    minAgeAlert.innerHTML = "Min age cannot be greater than Max age ";
    minAgeAlert.style.display = "inline";
  }

  if (Number(minAge.value) < Number(maxAge.value)) {
    minAgeAlert.style.display = "none";
  }

  if (Number(minAge.value) == Number(maxAge.value)) {
    minAgeAlert.innerHTML = "Min age and Max age cannot be equal";
    minAgeAlert.style.display = "inline";
  }

  if (minAge.value == "" || maxAge.value == "") {
    minAgeAlert.style.display = "none";
  }

  if (minAge.value == null || maxAge.value == null) {
    minAgeAlert.style.display = "none";
  }

  if (!minAge.value.match(/^[0-9]*$/) || !maxAge.value.match(/^[0-9]*$/)) {
    minAgeAlert.innerHTML = "Age cannot contain characters";
    minAgeAlert.style.display = "inline";
  }
}

// function for validating location and displaying location on typing
function locSel() {
  location1.innerHTML = `Location: ${Location.value}`;
  if (Location.value == "TS") {
    Img.src = "../../Images/facebook-logo.png";
  }
  if (Location.value == "AP") {
    Img.src = "../../Images/whatsapp-logo-png-2259.png";
  }
  if (Location.value == "MH") {
    Img.src = "../../Images/insta-logo.png";
  }
  if (Location.value == "KA") {
    Img.src = "../../Images/CSS-logo.png";
  }
  if (Location.value == "KL") {
    Img.src = "../../Images/html-tutorial.png";
  }
}

// setting image to change for every 1 seconds
var img1 = "../../Images/html-tutorial.png";
var img2 = "../../Images/CSS-logo.png";
var img3 = "../../Images/insta-logo.png";
let images = [img1, img2, img3];

let index = 0;
var Img3 = document.getElementById("threeimg");

function change() {
  Img3.src = images[index];
  index > 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 2000);
};
