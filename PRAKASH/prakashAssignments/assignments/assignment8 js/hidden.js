var Logo = document.getElementById("png");
var radiobutton = document.f2.inte;
var selectbox = document.getElementsByName("seljava");
var java = document.getElementById("formb-java");
var html = document.getElementById("formb-html");
var css = document.getElementById("formb-css");
var formx = document.getElementById("formb-jsdata");
var formbname = document.getElementById("formb-name");
var formbphone = document.getElementById("phone-no");
var formbpassword = document.getElementById('pwd');
var formbcpassword = document.getElementById('cpwd');
var formbmail = document.getElementById('email');
var formbLanguage = document.getElementById('formblang');
var formbgen = document.f2.gen;

var textarea = document.getElementById("leave");
var javaselect = document.getElementById('javaselect');
var htmlselect = document.getElementById('htmlselect');
var cssselect = document.getElementById('cssselect');
var abort;
var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// formbphone.setAttribute("maxlength","20")
formbphone.setAttribute('oninput', 'phoneslice()')
function phoneslice() {
  // if(ph.value.length>ph.maxLength){
  //   ph.value=ph.value.slice(0,ph.maxLength);
  // }
  if (formbphone.value.length > 10) {
    formbphone.value = formbphone.value.slice(0, 10);
  }
}
function formhide() {


  if (javaselect.value == "" && htmlselect.value == "" && cssselect.value == "") {
    document.getElementById("formb-jsdata").style.display = "none";
  } else if (javaselect.value != "" && htmlselect.value == "" && cssselect.value == "") {
    document.getElementById("formb-jsdata").style.display = "block";
    htmlselect.value = 'N/A';
    cssselect.value == "N/A";
  }
  else if (javaselect.value == "" && htmlselect.value != "" && cssselect.value == "") {
    document.getElementById("formb-jsdata").style.display = "block";
    javaselect.value = 'N/A';
    cssselect.value == "N/A";

  }
  else if (javaselect.value == "" && htmlselect.value == "" && cssselect.value != "") {
    document.getElementById("formb-jsdata").style.display = "block";
    htmlselect.value = 'N/A';
    javaselect.value == "N/A";
  } else
    if (javaselect.value != "" && htmlselect.value != "" && cssselect.value != "") {
      javaselect.value = "";
      htmlselect.value = "";
      cssselect.value = "";
      document.getElementById("formb-jsdata").style.display = "none";
    } else
      if (javaselect.value != "" && htmlselect.value == "" && cssselect.value != "") {
        javaselect.value = "";
        htmlselect.value = "";
        cssselect.value = "";
        document.getElementById("formb-jsdata").style.display = "none";
      } else
        if (javaselect.value == "" && htmlselect.value != "" && cssselect.value != "") {
          javaselect.value = "";
          htmlselect.value = "";
          cssselect.value = "";
          document.getElementById("formb-jsdata").style.display = "none";
        } else
          if (javaselect.value != "" && htmlselect.value != "" && cssselect.value == "") {
            javaselect.value = "";
            htmlselect.value = "";
            cssselect.value = "";
            document.getElementById("formb-jsdata").style.display = "none";
          } else {
            document.getElementById("formb-jsdata").style.display = "none";
          }
}

function formb() {
  for (let i = 0; i < radiobutton.length; i++) {
    if (radiobutton[i].checked) abort = radiobutton[i].value;
  }
  if (abort == "JAVA") {
    java.style.display = "inline";
    html.style.display = "none";
    css.style.display = "none";

  } else if (abort == "HTML") {
    html.style.display = "inline";
    java.style.display = "none";
    css.style.display = "none";
  }
  else if (abort == "CSS") {
    css.style.display = "inline";
    java.style.display = "none";
    html.style.display = "none";
  }
}


function formbvalidate() {
  let x = true;


  if (Logo.value == "" && radiobutton[0].checked == false && radiobutton[1].checked == false && radiobutton[2].checked == false && formbname.value == "" && formbphone.value == "") {
    alert("please fill the form")
    return false;
  }

  if (Logo.value != "") {
    var Filename = Logo.value;
    var domx = Filename.lastIndexOf(".") + 1;
    var extfile = Logo.value.substr(domx, Filename.length).toLowerCase();
    if (extfile != png) {
      //To Do
    } else {
      // Logo.value="";
      alert("Please upload only .png file");
      return false;
    }
  }
  if (Logo.value == "") {
    alert("please uploade the file of .png format!");
    x = false;
    return x;
  }
  if (radiobutton[0].checked == false && radiobutton[1].checked == false && radiobutton[2].checked == false) {
    alert("Please select your interests")
    x = false;
    return x;
  }


  if (radiobutton[0].checked == true && javaselect.value == "") {
    alert("Please select your interests Related to Java")
    return false;
  }

  if (radiobutton[1].checked == true && htmlselect.value == "") {
    alert("Please select your interests related to Html")
    return false;
  }
  if (radiobutton[2].checked == true && cssselect.value == "") {
    alert("Please select your interests related to Css")
    x = false;
    return x;
  }
  if (formbname.value == "") {
    alert("Please Enter your name");
    formbname.focus();
    x = false;
    return x;
  }
  if (!formbname.value.match(/^[A-Za-z ]+$/)) {
    alert("Opps! numbers and special characters are not allowed in name");
    x = false;
    formbname.focus();
    return x;
  }

  if (formbphone.value == "") {
    alert("Please enter your phone number");
    x = false;
    formbphone.focus();
    return x;
  }

  if (formbpassword.value == "") {
    alert("please enter the password");
    formbpassword.focus();
    return false;
  }
  if (formbpassword.length < 8) {
    alert("please enter the password");
    formbpassword.focus();
    return false;
  }
  if (!formbpassword.value.match(password)) {
    alert("Password must be minimum of 8 characters with atleast one special characters,numbers,captial letters and small letters");
    formbpassword.focus();
    return false;
  }
  if (formbcpassword.value == "") {
    alert("Password is not matching");
    formbcpassword.focus();
    return false;
  }
  if (formbpassword.value != formbcpassword.value) {
    alert("Password is not matching");
    formbcpassword.focus();
    return false;
  }
  if (formbmail.value == "") {
    alert("please enter your mail");
    formbmail.focus();
    return false;
  }
  if (!formbmail.value.match(email)) {
    alert("please enter the valid mail");

    formbmail.focus();
    return false;
  }
  if (formbLanguage.value == "-1") {
    alert("please select the language");
    return false;
  }

  if (formbgen[0].checked == false && formbgen[1].checked == false && formbgen[2].checked == false) {
    alert("please enter the gender");
    return false;
  }

  var hobbies = document.querySelectorAll('input[name="hobby"]:checked');

  if (hobbies != "") {
    var mydata = "";
    for (i = 0; i < hobbies.length; i++) {
      mydata = mydata + hobbies[i].value + ", ";
    } hobbies.value = mydata;
  }

  if (hobbies.value == "") {
    alert("Please select hobbies");

    return false;
  }

  if (textarea.value == "") {
    alert("Please enter your comments");
    x = false;
    textarea.focus();
    return x;
  }

  if (x) {
    var finaloutput = "";
    var finaloutput1 = "";
    if (javaselect.value != "") {
      finaloutput =
        ` Entered Values are 
                 Logo           :${Logo.value} ,
                 Interests      :${radiobutton.value} ,
                 Technology     :${javaselect.value} ,
                 Name           :${formbname.value}
                 Phoneno        :${formbphone.value} ,
                 Password       :${formbpassword.value},
                 confirmPassword:${formbcpassword.value},
                 Mail           :${formbmail.value},
                 Language       :${formbLanguage.value},
                 Gender         :${formbgen.value},
                 Hobbies        :${hobbies.value} ,
                 Comments       :${textarea.value}.`;

      finaloutput1 =
        ` Entered Values are 
                 Logo           :${Logo.value} , <br>
                 Interests      :${radiobutton.value} , <br>
                 Technology     :${javaselect.value} , <br>
                 Name           :${formbname.value}, <br>
                 Phoneno        :${formbphone.value} , <br>
                 Password       :${formbpassword.value}, <br>
                 confirmPassword:${formbcpassword.value}, <br>
                 Mail           :${formbmail.value}, <br>
                 Language       :${formbLanguage.value}, <br>
                 Gender         :${formbgen.value}, <br>
                 Hobbies        :${hobbies.value} , <br>
                 Comments       :${textarea.value} <br>`;
    }
    else if (htmlselect.value != "") {
      finaloutput =
        ` Entered Values are 
                 Logo           :${Logo.value} ,
                 Interests    :${radiobutton.value} ,
                 Technology      :${htmlselect.value} ,
                 Name      :${formbname.value}
                 Phoneno     :${formbphone.value} ,
                 Password  :${formbpassword.value},
                 confirmPassword :${formbcpassword.value},
                 Mail      :${formbmail.value},
                 Language  :${formbLanguage.value},
                 Gender       :${formbgen.value},
                 Hobbies        :${hobbies.value} ,
                 Comments       :${textarea.value}.`;
      finaloutput1 =
        ` Entered Values are 
                 Logo           :${Logo.value} , <br>
                 Interests    :${radiobutton.value} , <br>
                 Technology      :${htmlselect.value} , <br>
                 Name      :${formbname.value} , <br>
                 Phoneno     :${formbphone.value} , <br>
                 Password  :${formbpassword.value}, <br>
                 confirmPassword :${formbcpassword.value}, <br>
                 Mail      :${formbmail.value}, <br>
                 Language  :${formbLanguage.value}, <br>
                 Gender       :${formbgen.value}, <br>
                 Hobbies        :${hobbies.value} , <br>
                 Comments       :${textarea.value} <br>`;

    }
    else if (cssselect.value != "") {
      finaloutput =
        ` Entered Values are 
                 Logo           :${Logo.value} ,
                 Interests    :${radiobutton.value} ,
                 Technology      :${cssselect.value} ,
                 Name      :${formbname.value}
                 Phoneno     :${formbphone.value} ,
                 Password  :${formbpassword.value},
                 confirmPassword :${formbcpassword.value},
                 Mail      :${formbmail.value},
                 Language  :${formbLanguage.value},
                 Gender       :${formbgen.value},
                 Hobbies        :${hobbies.value} ,
                 Comments       :${textarea.value}.`;
      finaloutput1 =
        ` Entered Values are 
                 Logo           :${Logo.value} , <br>
                 Interests    :${radiobutton.value} , <br>
                 Technology      :${cssselect.value} , <br>
                 Name      :${formbname.value}, <br>
                 Phoneno     :${formbphone.value} , <br>
                 Password  :${formbpassword.value}, <br>
                 confirmPassword :${formbcpassword.value}, <br>
                 Mail      :${formbmail.value}, <br>
                 Language  :${formbLanguage.value}, <br>
                 Gender       :${formbgen.value}, <br>
                 Hobbies        :${hobbies.value} , <br>
                 Comments       :${textarea.value}. <br>`;


    }
    alert(finaloutput);
  }
  localStorage.setItem('output', finaloutput1)
  return x;
}
function welcome() {
  document.getElementById("formbhello").innerHTML += localStorage.getItem('output')
}





