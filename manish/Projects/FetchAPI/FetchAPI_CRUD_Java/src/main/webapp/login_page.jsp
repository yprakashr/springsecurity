<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=9.0" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
    <link rel="stylesheet" href="styles/style.css" />
    <script src="scripts/logIn.js" defer></script>
    <script src="scripts/signIn.js" defer></script>
    <script src="scripts/show_hide.js"></script>
    <script src="scripts/onFocus.js" defer></script>
    <title>Medicare | Sign in</title>
</head>

<body class="ass12">
    <div class="header">
        <a href="homepage" id="logo"><span id="fst">&nbsp;Medi</span><span id="snd">care&nbsp;</span><span id="plus"><sup>+</sup></span></a>
    </div>

    <div class="container" id="container">
        <div class="left" id="left">
            <!-- Login form -->
            <form action="loginAction" id="signinForm" onsubmit="loginAction()">
                <div class="login_sign_heading">
                	<h2>Please login</h2>
                </div>
                
                <div class="uname-pass">
                    <input type="text" name="username" placeholder="username" id="uname"
                        onfocus="hideValidateStatus()" />
                    <input type="password" name="password" placeholder="password" id="pass"
                        onfocus="hideValidateStatus()" />
                </div>

                <div class="login-btn">
                    <input type="submit" value="Login" id="login-btn" />
                    <input type="button" value="signUp ?" id="signup-btn" />
                </div>

                <%  String msg = request.getParameter("msg");
                    if("invalid".equals(msg)){
                %>
                <div id="loginMsg">
                    <p>Incorrect credentials</p>
                </div>
                <% 
                    }
                    if("error".equals(msg)){ 
                %>
                <div id="loginMsg">
                    <p>Something went wrong</p>
                </div>               
                <%
                    }
                %>

                <div class="signinInfo">
                    <p>Sign in to view and edit the booked appointments</p>
                </div>
            </form>

            <!-- Signup form -->
            <form action="" id="signupForm" onsubmit="return signUpAction()">
                <div class="login_sign_heading">
                	<h2>Please sign up</h2>
                </div>
                
                <div class="name-phone">
                    <input type="text" placeholder="fullname" id="fullname" onfocus="hideSignupStatus()" />
                    <input type="number" placeholder="phonenumber" id="phonenumberx" />
                </div>
                <br />
                <div class="uname-pass">
                    <input type="text" placeholder="username" id="username" />
                    <input type="password" placeholder="password" id="password" />
                </div>
                <div class="login-btn">
                    <input type="submit" value="signUp" id="signupAction-btn" />
                    <input type="button" value="Login" id="login-sign-btn" />
                </div>

                <div id="signup-msg">
                    <p>Sign-up successful</p>
                </div>

                <div class="signinInfo">
                    <p>Sign in to view and edit the booked appointments</p>
                </div>
            </form>
        </div>

        <!-- Right block -->
        <div class="right">
            <img id="rightImg" src="images/healthcare-europe-1080x675.jpg" width="90%" alt="Medical Image" />
            <br />
            <p>One appointment. Your health is ours.</p>
        </div>
    </div>

    <div class="footer">
       Medicare Healthcare© 2022, LLC and/or its affiliates. All rights reserved.
    </div>
</body>

</html>