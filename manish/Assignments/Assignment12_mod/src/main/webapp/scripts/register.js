// getting the appointment form
var Regform = document.getElementById("registration-form");

var gender = document.getElementsByName("gender");
var symptoms = document.getElementsByName("symptoms");
var vaccination = document.getElementsByName("vaccinated");
var phone = document.getElementById("phonenumber");
var age = document.getElementById("age");
var covid = document.getElementsByName("vaccinated");

// invalid characters for number input
var invalidChars = ["-", "+", "e"];

var gVal = ""; // variable to store Gender value
var vaccVal = ""; // variable to store vaccination value
let SymptomVal = []; // variable to store symptoms values
var ID = null; // variable to store latest ID for appointment

//Setting attributes for phone
phone.setAttribute("maxlength", "10");
phone.setAttribute("oninput", "PhoneSlice(this)");

//Setting attributes for age
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
function PhoneSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}

//Setting Maxlength slicing for age input
function AgeSlice(a) {
  if (a.value.length > a.maxLength) a.value = a.value.slice(0, a.maxLength);
}

//Setting onClick event for gender input
for (let i = 0; i < gender.length; i++) {
  gender[i].setAttribute("onclick", "genderSelect()");
}

//Setting onClick event for vaccination input
for (let i = 0; i < vaccination.length; i++) {
  vaccination[i].setAttribute("onclick", "vaccSelect()");
}

//Setting onClick event for symptoms input
for (let i = 0; i < symptoms.length; i++) {
  symptoms[i].setAttribute("onchange", "checkSelect(this)");
}

//Function to get selected gender value
function genderSelect() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) gVal = gender[i].value;
  }
}

//Function to get selected vaccination value
function vaccSelect() {
  for (let i = 0; i < vaccination.length; i++) {
    if (vaccination[i].checked) vaccVal = vaccination[i].value;
  }
}

//Function to get selected checkboxes value
function checkSelect(checkbox) {
  if (checkbox.checked == true) {
    SymptomVal.push(checkbox.value);
  } else {
    var temp = SymptomVal.indexOf(checkbox.value);
    SymptomVal.splice(temp, 1);
  }
}

// function to get max ID from DB---
function getAID() {
  let promise4 = fetch("http://localhost:8080/Max_aID", {
    method: "GET",
  });
  promise4
    .then((response) => {
      return response.json();
    })
    .then((aID) => {
      console.log(aID);
      ID = aID + 1;
    });
}

// calling the function---
getAID();

// function to add data into DB
function addAppointment(bodydata) {
  // fetch API to add appointment
  let promise5 = fetch("http://localhost:8080/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodydata),
  });
}

// main form validation function
function submitForm() {
  //Getting All form elements
  var Fname = document.getElementById("firstname");
  var Lname = document.getElementById("lastname");
  var Age = document.getElementById("age");
  var Phone = document.getElementById("phonenumber");
  var Date = document.getElementById("date");
  var Time = document.getElementById("time");
  var Addinfo = document.getElementById("add_info");
  var City = document.getElementById("city");
  var Area = document.getElementById("area");

  // data JSON
  var Adata = {
    id: ID,
    firstname: Fname.value.toString(),
    lastname: Lname.value.toString(),
    age: Age.value.toString(),
    phonenumber: Phone.value.toString(),
    gender: gVal.toString(),
    date: Date.value.toString(),
    time: Time.value.toString(),
    city: City.value.toString(),
    area: Area.value.toString(),
    vaccination_status: vaccVal.toString(),
    symptoms: SymptomVal.toString(),
    add_info: Addinfo.value.toString(),
  };

  // initial boolean flag
  var submitValue = true;

  //Alert Function for invalid first name pattern
  if (Fname.value.length === 0) {
    alert("First name cannot be empty");
    Fname.focus();
    submitValue = false;
  }

  if (submitValue) {
    if (Fname.value.length < 3) {
      alert("First name must contain minimum 3 characters");
      Fname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Fname.value.match(/^[a-zA-Z\s]*$/)) {
      alert("First name must contain only alphabets A-Z");
      Fname.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid last name pattern
  if (submitValue) {
    if (Lname.value.length === 0) {
      alert("Last name cannot be empty");
      Lname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Lname.value.length < 3) {
      alert("Last name must contain minimum 3 characters");
      Lname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Lname.value.match(/^[a-zA-Z\s]*$/)) {
      alert("Last name must contain only alphabets A-Z");
      Lname.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid age pattern
  if (submitValue) {
    if (Age.value.length === 0) {
      alert("Age cannot be empty");
      Age.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Number(Age.value) > 120) {
      alert("Age cannot be greater than 120");
      Age.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Age.value == 0) {
      alert("Age cannot be 0");
      Age.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid phone pattern
  if (submitValue) {
    if (Phone.value.length === 0) {
      alert("Phone cannot be empty");
      Phone.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Phone.value.length < 10) {
      alert("Phone cannot be less than 10 digits");
      Phone.focus();
      submitValue = false;
    }
  }

  //Alert Function for gender
  if (submitValue) {
    if (gVal == "") {
      alert("Please select gender");
      submitValue = false;
    }
  }

  //Alert Function for date
  if (submitValue) {
    if (Date.value == "") {
      alert("Please select date");
      Date.focus();
      submitValue = false;
    }
  }

  //Alert Function for time
  if (submitValue) {
    if (Time.value == "") {
      alert("Please select time");
      Time.focus();
      submitValue = false;
    }
  }

  //Alert Function for city
  if (submitValue) {
    if (City.value == "") {
      alert("Please select city");
      City.focus();
      submitValue = false;
    }
  }

  //Alert Function for city
  if (submitValue) {
    if (Area.value == "") {
      alert("Please select area");
      Area.focus();
      submitValue = false;
    }
  }

  //Alert Function for vaccination
  if (submitValue) {
    if (vaccVal == "") {
      alert("Please select vaccination status");
      submitValue = false;
    }
  }

  //Function to submitting form with entered data
  if (submitValue) {
    addAppointment(Adata);

    // resetting form after submitting
    Regform.reset();
    document.getElementById("appointment-msg").style.display = "block";
  }

  // returning false to prevent page from loading on form submission
  return false;
}
