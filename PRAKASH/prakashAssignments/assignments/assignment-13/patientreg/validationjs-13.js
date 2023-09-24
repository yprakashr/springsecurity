function validate14(){

    var Name = document.getElementById("uname");
    var Email = document.getElementById("contact-mail");
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
            var mydata="";
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
    }s