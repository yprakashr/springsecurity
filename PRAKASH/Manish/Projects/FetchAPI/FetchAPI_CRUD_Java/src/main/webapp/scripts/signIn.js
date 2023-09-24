// getting the signup form
var Signupform = document.getElementById("signupForm");

function signin_click() {
  window.location.href = "login";
}

// ---------------------------------------------------------------------------

var Fullname = document.getElementById("fullname");
var Phonenumber = document.getElementById("phonenumberx");
var Username = document.getElementById("username");
var Password = document.getElementById("password");
// variable to store latest ID for new User
var ID1 = null;

// invalid characters for number input
var invalidChars = ["-", "+", "e"];

//Setting attributes for phone
Phonenumber.setAttribute("maxlength", "10");
Phonenumber.setAttribute("oninput", "PhoneSlice(this)");

// preventing on entering invalid characters
Phonenumber.addEventListener("keydown", function (e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

//Setting Maxlength slicing for phone input
function PhoneSlice(ph) {
  if (ph.value.length > ph.maxLength)
    ph.value = ph.value.slice(0, ph.maxLength);
}

// function to get and set max User ID from DB---
function getUID() {
  //fetch API to load User credentials
  let promise3 = fetch("http://192.168.0.225:8081/Max_uID", {
    method: "GET",
  });
  promise3
    .then((response) => {
      return response.json();
    })
    .then((uID) => {
      ID1 = uID + 1;
    });
}

// calling the function---
getUID();

// function to add User into DB
function addUser(bodydata) {
  //fetch API to add user
  let promise2 = fetch("http://192.168.0.225:8081/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodydata),
  });
  promise2
    .then((response) => {
      console.log(response.status);
    })
    .then((bodydata) => {
      console.log(bodydata + "added");
    });
}

// SignUp function
function signUpAction() {
  var Fullname = document.getElementById("fullname");
  var Phonenumber = document.getElementById("phonenumberx");
  var Username = document.getElementById("username");
  var Password = document.getElementById("password");

  // data JSON
  var user = {
    uid: ID1,
    fullname: Fullname.value.toString(),
    phonenumber: Phonenumber.value.toString(),
    username: Username.value.toString(),
    password: Password.value.toString(),
  };

  // initial boolean flag
  var submitValue = true;

  //Alert Function for invalid fullname pattern
  if (Fullname.value.length === 0) {
    alert("Full name cannot be empty");
    Fullname.focus();
    submitValue = false;
  }

  if (submitValue) {
    if (Fullname.value.length < 3) {
      alert("Full name must contain minimum 3 characters");
      Fullname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Fullname.value.match(/^[a-zA-Z\s]*$/)) {
      alert("Full name must contain only alphabets A-Z");
      Fullname.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid phonenumber pattern
  if (submitValue) {
    if (Phonenumber.value.length === 0) {
      alert("Phonenumber cannot be empty");
      Phonenumber.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Phonenumber.value.length < 10) {
      alert("Phonenumber cannot be less than 10 digits");
      Phonenumber.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid username pattern
  if (submitValue) {
    if (Username.value.length === 0) {
      alert("Username cannot be empty");
      Username.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Username.value.length < 3) {
      alert("Username must contain minimum 3 characters");
      Username.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid password pattern
  if (submitValue) {
    if (Password.value.length === 0) {
      alert("Password cannot be empty");
      Password.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Password.value.length < 3) {
      alert("Password must contain minimum 3 characters" + Username.value[0]);
      Password.focus();
      submitValue = false;
    }
  }

  // Setting key for username signup
  if (submitValue) {
    if (Username.value.substring(4, 0) !== "1q2w") {
      alert("Contact any admin for signing up ");
      Username.focus();
      submitValue = false;
    }
  }

  //Function to submitting form with entered data
  if (submitValue) {
    addUser(user);

    // resetting form after submitting the form
    Signupform.reset();
    document.getElementById("signup-msg").style.display = "block";
  }

  // returning false to prevent page from loading on form submission
  return false;
}
