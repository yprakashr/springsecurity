// function to hide booking status msg
function hideBookedStatus() {
  if (document.getElementById("appointment-msg")) {
    document.getElementById("appointment-msg").style.display = "none";
  }
}

// function to hide login validation status msg
function hideValidateStatus() {
  if (document.getElementById("loginMsg")) {
    document.getElementById("loginMsg").style.display = "none";
  }
}

// function to hide signup status msg
function hideSignupStatus() {
  if (document.getElementById("signup-msg")) {
    document.getElementById("signup-msg").style.display = "none";
  }
}
