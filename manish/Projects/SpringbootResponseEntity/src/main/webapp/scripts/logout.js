// function to logout of session
function logout() {
  // setting session ID to null
  sessionStorage.setItem("session", null);

  // redirecting to homepage on logout
  location.replace("login"); // Doesn't allow history
}