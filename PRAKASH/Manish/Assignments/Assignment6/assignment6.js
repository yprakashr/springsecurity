var gender = document.getElementsByName("gender");
var skills = document.getElementsByName("skills");
var phone = document.getElementById("phone");

//Setting attributes for phone
phone.setAttribute("maxlength", "10");
phone.setAttribute("oninput", "PhoneSlice(this)");

//Setting Maxlength slicing for phone input
function PhoneSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}

//Setting onClick event for gender input
for (let i = 0; i < gender.length; i++) {
  gender[i].setAttribute("onclick", "radioSelect()");
}

//Setting onClick event for skills input
for (let i = 0; i < skills.length; i++) {
  skills[i].setAttribute("onchange", "checkSelect(this)");
}

var gVal; // variable to store Gender value
let SkillVal = []; // variable to store Skills values

//Function to get selected radio value
function radioSelect() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) gVal = gender[i].value;
  }
  console.log("gender: " + gVal);
}

//Function to get selected checkboxes value
function checkSelect(checkbox) {
  if (checkbox.checked == true) {
    SkillVal.push(checkbox.value);
  } else {
    var temp = SkillVal.indexOf(checkbox.value);
    SkillVal.splice(temp, 1);
  }
  console.log("Skills: " + SkillVal);
}

function submitForm() {
  //Getting All form elements
  var phone = document.getElementById("phone");
  var Name = document.getElementById("name");
  var email = document.getElementById("email");
  var state = document.getElementById("state");

  var submitValue = true;

  //Alert Function for invalid name pattern
  if (Name.value.length === 0) {
    alert("Name cannot be empty");
    Name.focus();
    submitValue = false;
  }

  if (submitValue) {
    if (Name.value.length < 3) {
      alert("Name must contain minimum 3 characters");
      Name.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Name.value.match(/^[a-zA-Z\s]*$/)) {
      alert("Name must contain only alphabets A-Z");
      Name.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid phone pattern
  if (submitValue) {
    if (phone.value.length < 10) {
      alert("Phone cannot be less than 10 digits");
      phone.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (phone.value.length === 0) {
      alert("Phone cannot be empty");
      phone.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid email pattern
  if (submitValue) {
    if (email.value.length === 0) {
      alert("Email cannot be empty");
      email.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!email.value.match(/^([a-zA-z0-9.]+[@][a-zA-Z]+[.][a-zA-Z]{2,})$/)) {
      alert("Please enter a valid Email");
      email.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid state pattern
  if (submitValue) {
    if (state.value == "select") {
      alert("please select the state");
      state.focus();
      submitValue = false;
    }
  }

  //Function to display alert on submitting form with enetered data
  if (submitValue) {
    var details =
      "Name: " +
      Name.value +
      ";\n" +
      "Phone: " +
      phone.value +
      ";\n" +
      "Email: " +
      email.value +
      ";\n" +
      "State: " +
      state.value +
      ";\n" +
      "Gender: " +
      gVal +
      ";\n" +
      "Skills: " +
      SkillVal +
      ";\n" +
      "Comments: " +
      comment.value;
    alert(details);
  }
  localStorage.setItem("form-details", details);
  return submitValue;
}

function displayDetails() {
  var thankyou = document.getElementById("thankyou");
  thankyou.innerHTML += "<h3>" + localStorage.getItem("form-details") + "</h3>";
}
