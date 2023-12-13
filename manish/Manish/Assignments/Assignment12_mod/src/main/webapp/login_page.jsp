<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

<div class="header text-center h2 p-3 border border-primary">
    <a href="homepage" id="logo"><span id="fst">&nbsp;Medi</span><span id="snd">care&nbsp;</span><span
            id="plus"><sup>+</sup></span></a>
</div>

<body>
    <div class="container p-5">
        <div class="row ROW">

            <div class="col-sm pt-5 left">

                <!-- Login form -->
                <form action="loginAction" id="signinForm" class="form-inline" onsubmit="loginAction()">

                    <div class="h2 pb-3 text-center">
                        Please Login
                    </div>

                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" name="username" placeholder="username" id="uname"
                                onfocus="hideValidateStatus()" />
                        </div>

                        <div class="col">
                            <input type="password" class="form-control" name="password" placeholder="password" id="pass"
                                onfocus="hideValidateStatus()" />
                        </div>
                    </div>

                    <!-- submit-btn -->
                    <div class="row pt-3 ">

                        <div class="form-group text-center">
                        
                            <input type="submit" class="btn btn-primary" value="Login" id="login-btn" />
                        
                            <input type="button" class="btn btn-primary" value="signUp ?" id="signup-btn" />
                        
                        
                            <div class="mt-2">
                                <% String msg=request.getParameter("msg"); if("invalid".equals(msg)){ %>
                                <div id="loginMsg">
                                    <p>Incorrect credentials</p>
                                </div>
                                <% } if("error".equals(msg)){ %>
                                    <div id="loginMsg">
                                        <p>Something went wrong</p>
                                    </div>
                                    <% } %>
                            </div>

                        </div>    

                    </div>


                    <div class="signinInfo mt-2">
                        <p>Sign in to view and edit the booked appointments</p>
                    </div>

                </form>

                <!-- Signup form -->
                <form class="form-inline" id="signupForm" onsubmit="return signUpAction()">

                    <div class="h2 pb-3 text-center">
                        Please Signup
                    </div>

                    <!-- Name phone -->
                    <div class="row">
                        <div class="col">
                            <input class="form-control" type="text" placeholder="fullname" id="fullname" onfocus="hideSignupStatus()" />
                        </div>
                        <div class="col">
                            <input class="form-control" type="number" placeholder="phonenumber" id="phonenumberx" />
                        </div>
                    </div>

                    <!-- uname pass -->
                    <div class="row pt-3">
                        <div class="col">
                            <input class="form-control" type="text" placeholder="username" id="username" />
                        </div>
                        <div class="col">
                            <input class="form-control" type="password" placeholder="password" id="password" />
                        </div>
                    </div>

                    <!-- submit-btn -->
                    <div class="row pt-3 justify-content-center">

                        <div class="form-group text-center">

                            <input class="btn btn-primary" type="submit" value="signUp" id="signupAction-btn" />
                        
                            <input class="btn btn-primary" type="button" value="Login" id="login-sign-btn" />
                        

                            <div id="signup-msg">
                                <p>Sign-up successful</p>
                            </div>

                        </div>

                    <div class="signinInfo mt-2">
                        <p>Sign in to view and edit the booked appointments</p>
                    </div>

                    </div>

                </form>

            </div>

            <div class="container-fluid col-sm-auto p-5">

                <img class="img-fluid mx-auto d-block" src="images/healthcare-europe-1080x675.jpg" alt="" width="450vw"
                    height="auto">

            </div>

        </div>

    </div>

</body>

<div class="footer">
    Medicare Healthcare© 2022, LLC and/or its affiliates. All rights reserved.
</div>

</html>