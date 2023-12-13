var phone = document.getElementById("phonenumber");
var age = document.getElementById("age");

// invalid characters for number input
var invalidChars = ["-", "+", "e"];

//Setting attributes for phone
phone.setAttribute("maxlength", "10");
phone.setAttribute("oninput", "PhoneSlice(this)");

//Setting attributes for phone
age.setAttribute("maxlength", "3");
age.setAttribute("oninput", "AgeSlice(this)");

// preventing on entering invalid characters
phone.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

// preventing on entering invalid characters
age.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

//Setting Maxlength slicing for phone input
function PhoneSlice(age) {
  if (age.value.length > age.maxLength)
    age.value = age.value.slice(0, age.maxLength);
}

//Setting Maxlength slicing for phone input
function AgeSlice(age) {
  if (age.value.length > age.maxLength)
    age.value = age.value.slice(0, age.maxLength);
}