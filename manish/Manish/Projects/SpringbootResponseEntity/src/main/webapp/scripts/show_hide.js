// functions to fadeOut and fadeIn form elements on login and signup
$(document).ready(function () {
  $("#signup-btn").click(function () {
    $("#signinForm").fadeOut(500);
    $("#signupForm").fadeIn(500);
  });

  $("#login-sign-btn").click(function () {
    $("#signupForm").fadeOut(500);
    $("#signinForm").fadeIn(500);
  });
});
