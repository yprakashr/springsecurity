package java.servelet1;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.GenericServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.*;


public class MultipleServlets extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) {
		
		try {
			PrintWriter out=res.getWriter();
			out.println("<html><body><h1>Welcome to multiple servelet programme</h1></body></html>");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
