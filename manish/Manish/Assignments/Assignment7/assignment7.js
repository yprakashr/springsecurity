//Getting all html form elements
var Logo = document.getElementById("logo");
var interests = document.getElementsByName("interests");
var JavaDiv = document.getElementById("java");
var HtmlDiv = document.getElementById("html");
var CssDiv = document.getElementById("css");
var javaDrop = document.getElementById("java-dropdown");
var htmlDrop = document.getElementById("html-dropdown");
var cssDrop = document.getElementById("css-dropdown");
var phone = document.getElementById("phone");
var gender = document.getElementsByName("gender");
var hobbies = document.getElementsByName("hobbies");

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
  gender[i].setAttribute("onclick", "genderSelect()");
}

//Setting onClick event for hobbies input
for (let i = 0; i < hobbies.length; i++) {
  hobbies[i].setAttribute("onclick", "checkSelect(this)");
}

// variable to store Gender value
var gVal;

// variable to store hobbies values
let hobVal = [];

//Function to get selected gender value
function genderSelect() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) gVal = gender[i].value;
  }
  console.log("gender: " + gVal);
}

//Function to get selected checkboxes value
function checkSelect(HOBBIES) {
  if (HOBBIES.checked) {
    hobVal.push(HOBBIES.value);
  } else {
    var temp = hobVal.indexOf(HOBBIES.value);
    hobVal.splice(temp, 1);
  }
  console.log("Hobbies : " + hobVal);
}

// ***************Initially hiding dropdowns***************
if (
  javaDrop.value == "N/A" &&
  htmlDrop.value == "N/A" &&
  cssDrop.value == "N/A"
) {
  form2.style.display = "none";
} else {
  form2.style.display = "flex";
  form2.style.flexDirection = "column";
}

// setting onclick attribute for all interests radios
for (let i = 0; i < interests.length; i++) {
  interests[i].setAttribute("onclick", "radioSelect()");
}

// variable to store checked interests value
var Interests;

// ***************function for displaying skill dropdown on interest select***************
function radioSelect() {
  for (let i = 0; i < interests.length; i++) {
    if (interests[i].checked) Interests = interests[i].value;
  }
  console.log("");
  console.log("Interest: " + Interests);
  if (Interests == "java") {
    JavaDiv.style.display = "inline";
    HtmlDiv.style.display = "none";
    CssDiv.style.display = "none";
    console.log("");
    console.log("java: " + javaDrop.value);
    form2.style.display = "none";
    javaDrop.value = "N/A";
    cssDrop.value = "N/A";
    htmlDrop.value = "N/A";
  } else if (Interests == "html") {
    HtmlDiv.style.display = "inline";
    JavaDiv.style.display = "none";
    CssDiv.style.display = "none";
    console.log("");
    console.log("html: " + htmlDrop.value);
    form2.style.display = "none";
    htmlDrop.value = "N/A";
    javaDrop.value = "N/A";
    cssDrop.value = "N/A";
  } else if (Interests == "css") {
    CssDiv.style.display = "inline";
    JavaDiv.style.display = "none";
    HtmlDiv.style.display = "none";
    console.log("");
    console.log("css: " + cssDrop.value);
    form2.style.display = "none";
    cssDrop.value = "N/A";
    htmlDrop.value = "N/A";
    javaDrop.value = "N/A";
  }
}

// ***************function for hiding form2 if dropdown value = select ***************
function selectDrop() {
  var jd = document.getElementById("java-dropdown");
  var hd = document.getElementById("html-dropdown");
  var cd = document.getElementById("css-dropdown");

  console.log("");
  console.log("java: " + jd.value);
  console.log("html: " + hd.value);
  console.log("css: " + cd.value);

  if (jd.value == "N/A" && hd.value == "N/A" && cd.value == "N/A") {
    form2.style.display = "none";
  } else {
    form2.style.display = "flex";
    form2.style.flexDirection = "column";
  }
}

// ***************function for validating logo type png***************
function validate() {
  var Logo = document.getElementById("logo");
  var javaDrop = document.getElementById("java-dropdown");
  var htmlDrop = document.getElementById("html-dropdown");
  var cssDrop = document.getElementById("css-dropdown");
  var Name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var javaRadio = document.getElementById("java-radio");
  var cssRadio = document.getElementById("css-radio");
  var htmlRadio = document.getElementById("html-radio");
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var others = document.getElementById("others");
  var comment = document.getElementById("comments");

  var submitValue = true;

  // ***************function for validating logo***************
  var logoName = Logo.value;
  var logoNameExt = logoName.substring(logoName.length, logoName.length - 3);
  if (Logo.value == "" || Logo.value == null) {
    alert("Please select logo");
    Logo.style.border = "2px solid red";
    submitValue = false;
  }

  if (submitValue) {
    if (logoNameExt !== "png" && logoNameExt != "PNG") {
      alert("File is not PNG");
      Logo.value = "";
      Logo.focus();
      console.log("Please select Logo of type PNG");
      submitValue = false;
    }
  }

  // ***************function for validating java radio ***************
  if (submitValue) {
    if (javaRadio.checked && !htmlRadio.checked && !cssRadio.checked) {
      if (javaDrop.value == "N/A") {
        alert("please select your skill in java");
        javaDrop.focus();
        submitValue = false;
      }
    }
  }

  // ***************function for validating html radio ***************
  if (submitValue) {
    if (!javaRadio.checked && htmlRadio.checked && !cssRadio.checked) {
      if (htmlDrop.value == "N/A") {
        alert("please select your skill in HTML");
        htmlDrop.focus();
        submitValue = false;
      }
    }
  }

  // ***************function for validating css radio ***************
  if (submitValue) {
    if (!javaRadio.checked && !htmlRadio.checked && cssRadio.checked) {
      if (cssDrop.value == "N/A") {
        alert("please select your skill in css");
        cssDrop.focus();
        submitValue = false;
      }
    }
  }

  // ***************function for validating no radio selected ***************
  if (submitValue) {
    if (!javaRadio.checked && !htmlRadio.checked && !cssRadio.checked) {
      alert("please select any interest");
      submitValue = false;
    }
  }

  // ***************function for validating name input ***************
  if (submitValue) {
    if (Name.value.length === 0) {
      alert("Name cannot be empty");
      Name.focus();
      submitValue = false;
    }
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

  if (submitValue) {
    if (Name.value.match(/^[\s]*$/)) {
      alert("Name cannot contain only empty spaces");
      Name.focus();
      submitValue = false;
    }
  }

  // ***************function for validating phone input ***************
  if (submitValue) {
    if (phone.value.length === 0) {
      alert("Phone cannot be empty");
      phone.focus();
      submitValue = false;
    }
  }
  if (submitValue) {
    if (phone.value.length < 10) {
      alert("Phone cannot be less than 10 digits");
      phone.focus();
      submitValue = false;
    }
  }

  // ***************function for validating gender radio ***************
  if (submitValue) {
    if (!male.checked && !female.checked && !others.checked) {
      alert("please select any gender");
      submitValue = false;
    }
  }

  // ***************function for showing alert on submitting form ***************
  if (submitValue) {
    var details =
      "Logo: " +
      Logo.value +
      ";\n" +
      "Name: " +
      Name.value +
      ";\n" +
      "Phone: " +
      phone.value +
      ";\n" +
      "Interests: " +
      Interests +
      ";\n" +
      "Java: " +
      javaDrop.value +
      ";\n" +
      "Html: " +
      htmlDrop.value +
      ";\n" +
      "Css: " +
      cssDrop.value +
      ";\n" +
      "Gender: " +
      gVal +
      ";\n" +
      "hobbies: " +
      hobVal +
      ";\n" +
      "Comments: " +
      comment.value +
      ";\n";

    var details1 =
      "Logo: " +
      Logo.value +
      ";\n <br>" +
      "Name: " +
      Name.value +
      ";\n <br>" +
      "Phone: " +
      phone.value +
      ";\n <br>" +
      "Interests: " +
      Interests +
      ";\n <br>" +
      "Java: " +
      javaDrop.value +
      ";\n <br>" +
      "Html: " +
      htmlDrop.value +
      ";\n <br>" +
      "Css: " +
      cssDrop.value +
      ";\n <br>" +
      "Gender: " +
      gVal +
      ";\n <br>" +
      "hobbies: " +
      hobVal +
      ";\n <br>" +
      "Comments: " +
      comment.value;
    alert(details);
  }
  localStorage.setItem("formData", details1);
  return submitValue;
}
function displayDetails() {
  var thankyou = document.getElementById("thankyou");
  thankyou.innerHTML += "<h3>" + localStorage.getItem("formData") + "</h3>";
}
