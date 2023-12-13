// getting the login form
var Loginform = document.getElementById("signinForm");

// function to validate uname and pass
function validate() {
  // fetch API to get users data
  let promise1 = fetch("http://192.168.0.225:8080/AllUsers", {
    method: "GET",
  });
  promise1
    .then((response) => {
      return response.json();
    })
    .then((Udata) => {
      var UName = document.getElementById("uname").value;
      var Pass = document.getElementById("pass").value;

      for (var i = 0; i < Udata.length; i++) {
        if (Udata[i].fullname == UName && Udata[i].password == Pass) {
          // setting sessionID on succesful login
          sessionStorage.setItem("session", Udata[i].fullname);

          //redirecting to appointments page on succesful login
          window.location = "appointments"; // allows history
          break;
        } else {
          // setting sessionID as NULL on failed login
          sessionStorage.setItem("session", null);
          document.getElementById("loginMsg").style.display = "block";
        }
      }
    });
}

// login function
function loginAction() {
  var Uname = document.getElementById("uname");
  var Pass = document.getElementById("pass");

  // initial boolean flag
  var submitVal = true;

  //Alert Function for invalid first name pattern
  if (Uname.value.length == 0) {
    alert("Username cannot be empty");
    Uname.focus();
    submitVal = false;
  }

  //Alert Function for invalid password pattern
  if (submitVal) {
    if (Pass.value.length == 0) {
      alert("password cannot be empty");
      Pass.focus();
      submitVal = false;
    }
  }

  if (submitVal) {
    // calling validate function
    validate();
  }

  // returning false to prevent page from loading on form submission
  return false;
}
