//Setting attributes for phone
var age=document.getElementById("inputAge");
var phone=document.getElementById("inputPhone");
  age.setAttribute("maxlength", "3");
age.setAttribute("oninput", "ageSlice(this)");
phone.setAttribute("maxlength", "10");
phone.setAttribute("oninput", "PhoneSlice(this)");

//Setting Maxlength slicing for phone input
function ageSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}

function PhoneSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}
