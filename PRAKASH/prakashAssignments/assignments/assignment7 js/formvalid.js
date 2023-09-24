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