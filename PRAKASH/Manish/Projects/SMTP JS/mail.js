function sendEmail(email) {
  const otp = Math.floor(Math.random() * 9000) + 1000;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "manishmachha@gmail.com",
    Password: "14E9790010CA6939EE1E16E8248BBEDD239A",
    To: `${email}`,
    From: "manishmachha@gmail.com",
    Subject: "Account recovery",
    Body: `Dear ${email},\n

    Thank you for choosing our service. As a security measure, we require an OTP (One-Time Password) to be entered for verifying your account or transaction.\n
    
    Your OTP is ${otp}. Please enter this code within [insert time limit here] minutes to complete your transaction or verify your account.\n
    
    Please note that this OTP is valid only for a single account verification attempt. If you did not initiate this request, please ignore this email and do not share the OTP with anyone.\n
    
    Thank you for using our service.\n
    
    Best regards,\n
    Medicare`,
  }).then(function (message) {
    alert("Mail has been sent successfully");
  });
}
