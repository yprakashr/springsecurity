package user.web;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import user.dao.UserDao;
import user.model.User;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;


public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userDao;       

    public UserServlet() {
        this.userDao=new UserDao();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action=request.getServletPath();
		switch(action) {
		case "/new":
			showNewForm(request, response);
			break;
		case "/insert":
			try {
				insertUser(request,response);
			} catch (SQLException | IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			break;
		case "/delete":
			try {
				deleteUser(request,response);
			} catch (SQLException | IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "/edit":
			showEditForm(request, response);
			
			break;
		case "/update":
			try {
				updateUser(request, response);
			} catch (IOException | SQLException e) {
				e.printStackTrace();
			}
			break;
			default:
				listUser(request, response);
				break;
		}
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		this.doGet(request, response);	
	}
	
	private void listUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		List<User> listuser=userDao.selectAllusers();
		request.setAttribute("listuser", listuser);
		RequestDispatcher dispatcher=request.getRequestDispatcher("user-list.jsp");
		dispatcher.forward(request, response);
		
	}
	
	private void updateUser(HttpServletRequest request, HttpServletResponse response) throws IOException, SQLException {
		int id=Integer.parseInt(request.getParameter("id"));
	String name= request.getParameter("name"); ;
	String email= request.getParameter("email");
	String country=request.getParameter("country");
	User user=new User(id, name, email, country);
	userDao.updateUser(user);
	response.sendRedirect("list");
	
	}
	
	
	
	private void deleteUser(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		int id=Integer.parseInt(request.getParameter("id"));
		userDao.deleteUserById(id);
		response.sendRedirect("list");
	}
	
	
	
	private void showNewForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	RequestDispatcher dispatcher=request.getRequestDispatcher("user-form-jsp");
	dispatcher.forward(request, response);
	}
	
	
	
	
	private void showEditForm(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {	
		int id=Integer.parseInt(request.getParameter("id"));
		User existingUSer=userDao.selectUserById(id);
		RequestDispatcher dispatcher=request.getRequestDispatcher("user-form-jsp");
		dispatcher.forward(request, response);	
	}
	
	
	
	private void insertUser(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		String name=request.getParameter("name");
		String emailString=request.getParameter("email");
		String country=request.getParameter("country");
		User user=new User(name,emailString,country);
		userDao.insertUser(user);
		response.sendRedirect("list");
		
	}
}
