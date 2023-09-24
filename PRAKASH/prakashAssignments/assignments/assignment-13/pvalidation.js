// var gen = document.querySelector('input[name="radio-stacked"]:checked');

var todayDate=new Date();
var month=todayDate.getMonth()+1;
var year=todayDate.getUTCFullYear();
var tdate=todayDate.getDate();
if(month<10){
  month="0"+month;
}
if(month<10){
  tdate="0"+tdate;
}
var maxdate=year+"-"+month+"-"+tdate;
console.log(maxdate);
dob.setAttribute("max",maxdate);


function submitForm() {
  var drugallergies = document.getElementsByClassName("");
  var Name = document.getElementById("Name");
  var dob = document.getElementById("dob");
  // var gen = document.getElementsByClassName("");
  var height = document.getElementById("ht");
  var weight = document.getElementById("wt");
  var email = document.getElementById("email");
  var reasonsforseeingdoctor = document.getElementById("rsd");
  var patiencemedicalhistory = document.getElementById("validationTextarea");
  var otherillness = document.getElementById("otherillness");
  var pleaselistanyoperationanddatesofeach =document.getElementById("datesofeach");
  var pleaselistyourcurrentmedications =document.getElementById("currentmedications");
  var excersice = document.getElementById("excersice");
  var eatingfoolingdiet = document.getElementById("diet");
  var alcoholconsumption = document.getElementById("alcohol");
  var caffineconsumption = document.getElementById("caffine");
  var doyousmoke = document.getElementById("smoke");
  var comments = document.getElementById("comments");

var details = `Name:    ${Name.value},
               DOB:     ${dob.value},
               Gender:  ${gen.value},
               Height:  ${height.value},
               Weight:  ${weight.value},
               Email:   ${email.value},
               Reasons for Seeing Doctor:   ${reasonsforseeingdoctor.value}
               patience medical history:    ${patiencemedicalhistory.value},
               drug allergies:   ${drugallergies.value},
               other Illness:    ${otherillness.value},
               please list any operation and dates of each:   ${pleaselistanyoperationanddatesofeach.value},           
               pleaselistyourcurrentmedications:  ${pleaselistyourcurrentmedications.value},
               excersice:   ${excersice.value},
               Eating Fooling Diet:  ${eatingfoolingdiet.value},
               alcoholconsumption:   ${alcoholconsumption.value},
               caffineconsumption:   ${caffineconsumption.value},
               doyousmoke:    ${doyousmoke.value},
               comments:      ${comments.value}`;
alert(details);
localStorage.setItem("form-details", details);
}

function display(){
  var thankyou=document.getElementById("thankyou");
  thankyou.innerHTML+="<h3>"+localStorage.getItem(form-details)+"</h3>";
}





















