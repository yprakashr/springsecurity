// functions to fadeOut and fadeIn form elements on login and signup
$(document).ready(function () {
  // $("#signin-btn").click(function () {
  //   document.getElementById("rightImg").style.display = "none";
  //   document.getElementById("signin-btn").style.display = "none";
  //   $("#signinForm").fadeIn(500);
  // });

  $("#signup-btn").click(function () {
    $("#signinForm").fadeOut(1000);
    $("#signupForm").fadeIn(1000);
  });

  $("#login-sign-btn").click(function () {
    $("#signupForm").fadeOut(1000);
    $("#signinForm").fadeIn(1000);
  });
});
