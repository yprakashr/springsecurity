var Logo=document.getElementById("png");
var radiobutton=document.f2.inte;
var selectbox=document.getElementsByName("seljava");
var java=document.getElementById("formb-java");
var html= document.getElementById("formb-html");
var css= document.getElementById("formb-css");
var form2=document.getElementById("formb-js2data");
var formbname=document.getElementById("formb-name");
var formbphone=document.getElementById("phone-no");
var hobbies=document.querySelectorAll('input[name="hobby"]:checked');
var textarea=document.getElementById("leave");
var select=document.getElementsById("sele");
var alu=[1,2,3,45,5,6];
// var select1=document.getElementsById("sele1");
// var select2=document.getElementsById("sele2");
var dropdown=document.f2.seljava;
var abort;

console.log(selectbox);
var allow;
function formhide(){
if(selectbox[0].value=="Spring" ||selectbox[1].value=="Hibernate" ||selectbox[2].value=="Selenium" ||selectbox[3].value=="Html forms" ||selectbox[4].value=="Html links" ||selectbox[5].value=="Html tables" ||selectbox[6].value=="Sass" ||selectbox[7].value=="Layouts" ||selectbox[8].value=="Colors"){
form2.style.display="inline";
}else{
  form2.style.display="none";
}
}

function formb() {
  for (let i = 0; i < radiobutton.length; i++) {
    if(radiobutton[i].checked) abort = radiobutton[i].value;
  }
    if (abort == "JAVA") {
    java.style.display = "block";
    html.style.display = "none";
    css.style.display = "none";
  } else if (abort == "HTML") {
    html.style.display = "inline";
    java.style.display = "none";
    css.style.display = "none";
  } else if (abort == "CSS") {
    css.style.display = "inline";
    java.style.display = "none";
    html.style.display = "none";
  }
    }
  

function formbvalidate(){
 
let x=true;

// if(fileupload.value==""  && radiobutton[0].value==""&&radiobutton[1].value==""&&radiobutton[2].value=="" && formbname=="" && formbphone=="" && textarea==""){
//   alert("Please fill the form!")
//   x=false;
// }else
if(x){
if( Logo.value==""){
  alert("please uploade the file of .png format!");
  x=false;

}
}
if(x){
if(radiobutton[0].checked==false && radiobutton[1].checked==false && radiobutton[2].checked==false  ){
  alert("Please select your interests");
  x=false;
 
}}
if(x){
if(select.value=="-1"){
  alert("Please select your Technology")
  x=false;

}}
// if(select1.value==""){
//   alert("Please select your Technology")
//   x=false;
//   return x;
// }
// if(select2.value==""){
//   alert("Please select your Technology")
//   x=false;
//   return x;
// }
if(x){
if(formbname.value==""){
  alert("Please Enter your name");
  x=false;
return x;
}}
if(x){
if(!formbname.value.match(/^[A-Za-z ]+$/)){
  alert("Opps! Name must consists only alphabets and spaces");
  x=false;

}}
if(x){
if(formbphone.value==""){
  alert("Please enter your phone number");
  x=false;

}}
if(x){
if(!formbphone.value.match(/^[0-9]+$/)){
  alert("Opps! Phone number must consists only numbers");
  x=false;
  
}}

if (x) {
  if (hobbies!= null) {
    x = true;
    var mydata = "";
    for (var i = 0; i < hobbies.length; i++) {
      mydata = mydata + hobbies[i].value + "\n";
    }
    hobbies.value = mydata;
  } else {
    alert("Please select interest");
    x = false;
  }}
  
if(x){
if(textarea.value==""){
  alert("Please enter your comments");
  x=false;
  
}}
if(x){
var finalSelection =
` Entered Values are 
               Logo         :${Logo.value} ,
               radiobutton  :${radiobutton.value} ,
               selectbox    :${dropdown.value} ,
               formbname    :${formbname.value}
               formbphone   :${formbphone.value} ,
               hobbies      :${hobbies.value} ,
               textarea     :${textarea.value}.`;
alert(finalSelection);
return x;
}
// return x;
}


var alu=[1,2,3,45,5,6];
console.log(a);



