function stopRedirect() {
  event.preventDefault();
}

// getting the login form
var Loginform = document.getElementById("signinForm");

// login function
function loginAction() {
  var Uname = document.getElementById("uname");
  var Pass = document.getElementById("pass");

  // initial boolean flag
  var submitVal = true;

  //Alert Function for invalid first name pattern
  if (Uname.value.length == 0) {
    alert("Username cannot be empty");
    stopRedirect();
    Uname.focus();
    submitVal = false;
  }

  //Alert Function for invalid password pattern
  if (submitVal) {
    if (Pass.value.length == 0) {
      alert("password cannot be empty");
      stopRedirect(); 
      Pass.focus();
      submitVal = false;
    }
  }

  if (submitVal) {
    sessionStorage.setItem("session", Uname.value);
    submitVal = false;
  }

  // returning false to prevent page from loading on form submission
  return false;
}
