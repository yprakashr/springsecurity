<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
 <!-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> -->
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<%@ include file="allcss.jsp"  %>
<link rel="stylesheet" href="../resources/patiency.css">
</head>
<body>
<%@ include file="nav_bar.jsp"  %>


<br>
<div class="container">
<div class="row">
<div class="col-md-6 offset-md-3">
<div class="card">
  <div class="card-body">
   
    <p class="fs-3 text-center">Register Here</p>
     
    <!-- <c:if test="${not empty successmsg}" >
    <p class="text-center text-success">${successmsg}</p>
     <c:remove var="${successmsg}"/>
    </c:if>
    <c:if test="${not empty errormsg}">
    <p class="text-center text-success">${errormsg}</p>
    <c:remove var="${errormsg}"/>
    </c:if> -->
    
    <form action="register" method="post">

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Full Name</label>
        <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Date of Birth</label>
        <input type="date" name="dob" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
        <input type="number" name="no" class="form-control" id="exampleInputPassword1">
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>

      <button type="submit" class="btn btn-primary col-md-12">Submit</button>

    </form>
  </div>
</div>
</div>
</div>
</div>
</body>
</html>