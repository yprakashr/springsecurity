var phone = document.getElementById("phone");

// invalid characters for number input
var invalidChars = ["-", "+", "e"];

//Setting attributes for phone
phone.setAttribute("maxlength", "10");
phone.setAttribute("oninput", "PhoneSlice(this)");

// preventing on entering invalid characters
phone.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key) ) {
    e.preventDefault();
  }
});

//Setting Maxlength slicing for phone input
function PhoneSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}
