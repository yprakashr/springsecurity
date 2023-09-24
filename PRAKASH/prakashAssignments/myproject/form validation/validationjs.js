const form=document.getElementById('form');
const username=docoument.getElementById('username');
const email=document.getElementById('email');
const password=docoument.getElementById('password');

form.addEventListener("submit" , e=>{
    e.preventDefault();
    validationInputs();
});

const setError =(element, message) =>{
    const inputControl =element.parentElement;
    const errorDisplay =inputControl.querySelector('error');

    errorDisplay.innerText =message;
    inputControl.classList=remove('success'); 
}

const validationInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username , 'username is required');
    }
    else{
        setSuccess(username);
    }

if(emailValue === ''){
    setError(email 'Email is required');

}
else if(!isValidEmail(emailvalue)){
    setError(email, 'Provide a valid email address');

}
else{
    setSuccess(email);
}

if(passwordValue === ''){
    setError(password ,'password is required');}
    else if(passwordValue.length<8){
        setError(password ,'passowrd must be at least 8 character.');
    }
    else {
        setSuccess(passowrd);
    }
    if(password2Value === ''){
        setError(password2 , 'please confirm your password');
    }
else if(password2Value !== passwordValue){
    setError(password2, "passwords doesn't match");
} else {
    setSuccess(password2);
}
}
;


