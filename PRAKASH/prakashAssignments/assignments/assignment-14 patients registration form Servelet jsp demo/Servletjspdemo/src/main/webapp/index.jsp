<%@page import="com.entity.Patient"%>
<%@page import="java.util.List"%>
<%@page import="com.dao.Daopatient"%>
<%@page import="java.sql.Connection"%>
<%@page import="com.connection.DBConn"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   <!-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> -->
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<%@ include file="allcss.jsp"  %>
</head>
<body>
<%@ include file="nav_bar.jsp"  %>



<div class="container p-5">
    <p class="text-center fs-1">All patients details</p>
    
         <!-- <c:if test="${not empty successmsg}" >
    <p class="text-center text-success">${successmsg}</p>
     <c:remove var="${successmsg}"/>
    </c:if>
    <c:if test="${not empty errormsg}">
    <p class="text-center text-success">${errormsg}</p>
    <c:remove var="${errormsg}"/>
    </c:if> -->
<table class="table">
    <thead>
      <tr>
        <th scope="col">Full Name</th>
        <th scope="col">DOB</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
    <% Daopatient p=new Daopatient(DBConn.getconn());
    List<Patient> list=p.getAllPatients();
    for (Patient pa:list){ %>
       <tr>

    <th><%= pa.getFullname() %></th>
    <td><%= pa.getDOB() %></td>
    <td><%= pa.getEmail() %></td>
    <td><%= pa.getNumber() %></td>
    <td><a href="Edit_patient.jsp?id=<%=pa.getId() %>" class="btn btn-sm btn-primary">Edit</a>
    <a href="delete?id=<%= pa.getId() %>" class="btn btn-sm btn-danger" >Delete</a></td>
  </tr>
    
    <%  }%>
     
      
     
    </tbody>
  </table>
</div>




</body>
</html>