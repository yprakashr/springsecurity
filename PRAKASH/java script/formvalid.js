 function validate(){

var Name = document.getElementById("uname");
var DOB = document.getElementById("dob");
var phone = document.getElementById("contact-no");
var state = document.getElementById("contact-state");
var text =document.getElementById("contact-message");
var Gen= document.f1.gender;
var password=document.getElementById("password");
var Zipcode=document.f1.post;
var getSelectedInterest=document.querySelectorAll('input[name="check"]:checked');
// var getSelectedInterest=document.getElementsByName("check");

var valid=true;
if(getSelectedInterest!=null){
        var mydata;
        for(i=0;i<getSelectedInterest.length;i++){
        mydata=mydata + getSelectedInterest[i].value + ", ";

        }
        getSelectedInterest.value=mydata;

        }

// //****************************** name validation *******************************************

var letters = /^[A-Za-z ]+$/;
var gmail= /^[A-Za-z0-9+._-]+@[A-Za-z0-9.-_]+[.][A-Za-z]+$/;
var phoneno= /^[1-9][0-9]{9}$/;
// var zip=/^[0-9]{6}$/;
var pass=/^.{5,15}$/;

// Email.setAttribute("pattern","[A-Za-z0-9.]+@[A-Za-z0-9]+[.][A-Za-z]{2,}+")

if(Name.value==""  || Email.value == ""  && phone.value == ""  && state.value==""  && text.value == "" )
{
    alert ("Please fill your details");
    Name.focus();
return false;
}else

if(Name.value == ""){
    alert("Please enter your name");
    Name.focus();
    return false;
}else

if(!Name.value.match(letters))
{
    alert("Name must not include numbers,and special characters");
    Name.focus();
    return false;
}else


if(Name.value < 3 ){
 alert("Please enter the valid name");
 Name.focus();
 return false;
 }else


//     //*************************** email validation *************************************************

    if (Email.value == "" ){
        alert("Please enter your mail Id");
        Email.focus();
        return false;
    }else



 if(!Email.value.match(gmail)){
 alert("Please enter the valid mail format ex:(jhonswidez@gmail.com)")
 Email.focus();
return false;
}else


// ************************************************ password *******************************************************

if (password.value == null || password.value == "") {
    alert("Please enter password");
    password.focus();
    return false;
  }else

  if (!password.value.match(pass)) {
    alert("Password should contain min 5 characters and max 15 characters");
    password.focus();
    return false;
  }else

// //******************************** phone number validation ************************************************


     if(phone.value == ""){
alert("phone number should not be empty");
phone.focus();
return false;
    }else 
    
    if(!phone.value.match(phoneno)){
alert("Phone number must be 10 characters long number and first digit can't be 0!")
phone.focus();
return false
    }else

// //***************************** state validation ********************************************************

    if(state.value=="-1"){
        alert("Please enter the state");
        state.focus();
return false;
    }else  

   
// //******************************* gender ********************************************* */

if(Gen[0].checked==false&&Gen[1].checked==false&&Gen[2].checked==false){
    alert("Please enter your gender")
    
return false;
}else
   

  

// //******************************************** Interests ************************************************/


if(getSelectedInterest.value==""){
    alert("Please select your interest");
    return false;
}else



// ********************************************* zipcode ***************************************

if (Zipcode.value == null || Zipcode.value == "") {
        alert("Please enter zip code");
        Zipcode.focus()
        valid=false;
      }else

if (!Zipcode.value.match(/^[0-9]{6}$/)) {
        alert("Enter only 6numbers");
        Zipcode.focus();
        valid=false;
      }else 




// // ************************************** text validation ********************************************************************

if( text.value == "" || text.value.length < 10 ){
    alert("Text must contain min of 10 characters");
    text.focus();
    return false;
}else

    
//   //***********************************************success format *************************************************************** 
  
    

// if(valid)
{
        var finalSelection= `
              Entered values are:
               Name         :${Name.value} ,
               Phone        :${phone.value} ,
               Email        :${Email.value} ,
               Password     :${password.value}
               Gender       :${Gen.value} ,
               Interest     :${getSelectedInterest.value} ,
               State        :${state.value} ,
               zipcode      :${Zipcode.value} ,
               Text         :${text.value}.`
               alert(finalSelection);
            
    }

localStorage.setItem('item',finalSelection);
return valid;
}



function add(){
    document.getElementById("add-to-me").innerHTML += 
       localStorage.getItem('item'); 
}

// ***********************************************************************************************************************************************************************************************************************

// **************************************** Form valid -2 ******************************************************************************************************************************************************************************

// ***************************************************************************************************************************************************************************************************************************************
// var alu=[1,2,3,45,5,6];
// alu.forEach(function(a,b){
// console.log(a,b);
// })

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



  if (Logo.value == "" && radiobutton[0].checked == false && radiobutton[1].checked == false && radiobutton[2].checked == false && formbname.value == "" && formbphone.value == "") {
    alert("please fill the form")
    return false;
    
     x = false;
  }

  if (Logo.value != "") {
    var Filename = Logo;
    var domx = Filename.lastIndexOf(".") + 1;
    var extfile = Logo.slice(domx, Filename.length).toLowerCase();
    if (extfile == png) {
      //To Do
    } else {
      // Logo.value="";
      alert("Please upload only .png file");
      return false;
      x = false;
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
    x = false;
  }

  if (radiobutton[1].checked == true && htmlselect.value == "") {
    alert("Please select your interests related to Html")
    return false;
    x = false;
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
     x = false;
  }
  if (formbpassword.length < 8) {
    alert("please enter the password");
    formbpassword.focus();
    return false;
     x = false;
  }
  if (!formbpassword.value.match(password)) {
    alert("Password must be minimum of 8 characters with atleast one special characters,numbers,captial letters and small letters");
    formbpassword.focus();
    return false;
     x = false;
  }
  if (formbcpassword.value == "") {
    alert("Password is not matching");
    formbcpassword.focus();
    return false;
     x = false;
  }
  if (formbpassword.value != formbcpassword.value) {
    alert("Password is not matching");
    formbcpassword.focus();
    return false;
     x = false;
  }
  if (formbmail.value == "") {
    alert("please enter your mail");
    formbmail.focus();
    return false;
     x = false;
  }
  if (!formbmail.value.match(email)) {
    alert("please enter the valid mail");

    formbmail.focus();
    return false;
     x = false;
  }
  if (formbLanguage.value == "-1") {
    alert("please select the language");
    return false;
     x = false;
  }

  if (formbgen[0].checked == false && formbgen[1].checked == false && formbgen[2].checked == false) {
    alert("please enter the gender");
    return false;
     x = false;
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

     x = false;
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
    return x;
  }
  localStorage.setItem('output', finaloutput1)
 
}
function welcome() {
  document.getElementById("formbhello").innerHTML += localStorage.getItem('output')
}

// ***************************************************************************************************************************************************************************************

// *****************************************************assignment-9 java script*************************************************************************************************************************

// ******************************************************************************************************************************************************************************************************************

// var namespan = document.getElementById("ass9-name");
// const icon1 = document.querySelector('.icon1');
// const icon2 = document.querySelector('.icon2');
// const errorTextName = document.querySelector('.error-text-name');
// var minage = document.getElementById("ass9-Minage");
// var maxage = document.getElementById("ass9-Maxage");
// var form = document.getElementById("display-flex");
// const errorTextmin = document.querySelector('.error-text-minage');
// const errorTextmax = document.querySelector('.error-text-maxage');
// const minicon1 = document.getElementById('minicon1');
// const minicon2 = document.getElementById('minicon2');
// const maxicon1 = document.getElementById('maxicon1');
// const maxicon2 = document.getElementById('maxicon2');
// const selectCountry = document.getElementById("country");
// const countryFlags = document.getElementById("flags");
// const resName = document.getElementById("res-name");
// const resTotal = document.getElementById("res-total");
// const resLoc = document.getElementById("res-loc");
// let image1 = document.getElementById("ass9-image1");
// let image2 = document.getElementById("ass9-image2");
// let image3 = document.getElementById("ass9-image3");
// let ran = (Math.ceil(Math.random() * 6));
// let ran1 = (Math.ceil(Math.random() * 9));
// let ran2 = (Math.ceil(Math.random() * 9));
// var resultOfAss9;
// const labelN = document.getElementById("name");
// const labelT = document.getElementById("total");
// const labelL = document.getElementById("location");
// const images = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];
// const images1 = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];
// const images2 = ["../../images/img1.jpg", "../../images/img2.jpg", "../../images/img3.jpg", "../../images/img4.jpg", "../../images/img5.jpg", "../../images/img6.jpg", "../../images/img7.jpg", "../../images/img8.jpg", "../../images/img9.jpg", "../../images/img10.jpg","../../images/img11.jpg", "../../images//img12.jpg", "../../images/img13.jpg", "../../images/img14.jpg", "../../images/img16.jpg", "../../images/img17.jpg","../../images/img18.jpg", "../../images/img19.jpg", "../../images/img20.jpg", "../../images/img21.jpg", "../../images/img22.jpg", "../../images/img23.jpg", "../../images/img24.jpg", "../../images/img26.jpg", "../../images/img27.jpg"];

// var letters = /^[A-Za-z ]+$/;
// // var num=/^[0-9]{2,3}+$/

// setInterval(() => {
//     let ran = (Math.ceil(Math.random() * 24));
//     let ran1 = (Math.ceil(Math.random() * 24));
//     let ran2 = (Math.ceil(Math.random() * 24));
//     image1.src = images[ran];
//     image2.src = images1[ran1];
//     image3.src = images2[ran2];
// },5000);

// function check() {
//     if (namespan.value.match(letters)) {
//         labelN.innerHTML = `Name       :${namespan.value}`
//         namespan.style.borderColor = "#27ae60";
//         icon1.style.display = "none";
//         icon2.style.display = "block";
//         errorTextName.style.display = "none";
//         // namespan.value=resName.value;
//     } else {
//         // alert("Error");
//         namespan.style.borderColor = "#e74c3c";
//         icon1.style.display = "block";
//         icon2.style.display = "none";
//         errorTextName.style.display = "block";
//     }
//     if (namespan.value == "") {
//         namespan.style.borderColor = "#lightgrey";
//         icon1.style.display = "none";
//         icon2.style.display = "none";
//         errorTextName.style.display = "none";
//     }

//     // ****************************************minage *******************************************************
//     if (minage.value < maxage.value) {

//         minage.style.borderColor = "#27ae60";
//         minicon1.style.display = "none";
//         minicon2.style.display = "block";
//         errorTextmin.style.display = "none";
//     } else {

//         minage.style.borderColor = "#e74c3c";
//         minicon1.style.display = "block";
//         minicon2.style.display = "none";
//         errorTextmin.style.display = "block";
//     }
//     if (maxage.value > minage.value) {
//         minage.style.borderColor = "#27ae60";
//         maxicon1.style.display = "none";
//         maxicon2.style.display = "block";
//         errorTextmax.style.display = "none";
//     } else {
//         minage.style.borderColor = "#e74c3c";
//         maxicon1.style.display = "block";
//         maxicon2.style.display = "none";
//         errorTextmax.style.display = "block";
//     }
//     if (maxage.value == minage.value) {
//         minage.style.borderColor = "#e74c3c";
//         maxicon1.style.display = "block";
//         errorTextmax.style.display = "block";
//         errorTextmin.style.display = "block";
//         minicon1.style.display = "block";
//     }
//     if (minage.value == "") {
//         minage.style.borderColor = "#lightgrey";
//         minicon1.style.display = "none";
//         minicon2.style.display = "none";
//         errorTextmin.style.display = "none";
//     }
//     if (maxage.value == "") {
//         maxage.style.borderColor = "#lightgrey";
//         maxicon1.style.display = "none";
//         maxicon2.style.display = "none";
//         minicon1.style.display = "none";
//         errorTextmax.style.display = "none";
//         errorTextmin.style.display = "none";
//     } else {
//         labelT.innerHTML = `Total age  :${Number(minage.value) + Number(maxage.value)}`;
//     }
//     if (minage.value.match(letters)) {
//         maxage.style.borderColor = "#lightgrey";
//         maxicon1.style.display = "none";
//         maxicon2.style.display = "none";
//         minicon1.style.display = "block";
//         errorTextmax.style.display = "none";
//         errorTextmin.style.display = "block";
//     }
// if (selectCountry.value == "India") {
//         countryFlags.src = "../../images/india.jpeg";
//     } else

//         if (selectCountry.value == "USA") {
//             countryFlags.src = "../../images/USA flag.jpeg";
//         } else
//             if (selectCountry.value == "Bangladesh") {
//                 countryFlags.src = "../../images/Bangla flag.jpeg";
//             } else
//                 if (selectCountry.value == "Israel") {
//                     countryFlags.src = "../../images/israel flag.jpeg";
//                 } else
//                     if (selectCountry.value == "Mexico") {
//                         countryFlags.src = "../../images/mexico.jpeg";
//                     } else
//                         if (selectCountry.value == "France") {
//                             countryFlags.src = "../../images/france flag.jpeg";
//                         } else
//                             if (selectCountry.value == "China") {
//                                 countryFlags.src = "../../images/china flag.jpeg";
//                             } else
//                                 if (selectCountry.value == "Sri lanka") {
//                                     countryFlags.src = "../../images/sri lanka flag.jpeg";
//                                 } else {
//                                     countryFlags.src = "../../images/img27.jpg";

//                                 }
//     if (selectCountry.value == "") {
//         //To do
//     } else {
//         labelL.innerHTML = `Location   :${selectCountry.value}`;
//     }
// }






