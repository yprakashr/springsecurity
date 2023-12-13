package com.example.demo;

import java.io.IOException;
import java.sql.*;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
public class Home {

	@Autowired
	AppointmentsRepo appointmentsrepo;

	@Autowired
	UsersRepo usersrepo;

	@GetMapping("/homepage")
	public ModelAndView homepage() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("registration_form.html");
		return mv;
	}

	@GetMapping("/appointments")
	public ModelAndView appointments() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("appointments.html");
		return mv;
	}

	@GetMapping("/login")
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("login_page.jsp");
		return mv;
	}

	// to get list of all Appointments
	@GetMapping("AllAppointments")
	@ResponseBody
	public List<Appointments> getAppointments() {
		return (List<Appointments>) appointmentsrepo.findAll();
	}

	// to get list of all Users
	@GetMapping("AllUsers")
	@ResponseBody
	public List<Users> getUsers() {
		return (List<Users>) usersrepo.findAll();
	}

	// to get list of Appointments by ID
	@GetMapping("Appointments/{aid}")
	@ResponseBody
	public Optional<Appointments> getAppointmentByID(@PathVariable("aid") int aid) {
		return appointmentsrepo.findById(aid);
	}

	// to get max ID of appointments
	@GetMapping("Max_aID")
	@ResponseBody
	public int getMAxAppID() throws SQLException {
		int maxID = 0;
		Connection con = ConnectionProvider.getCon();
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery("select max(id) from appointments");
		while (rs.next()) {
			maxID = rs.getInt(1);
		}
		return maxID;
	}

	// to get max ID of Users
	@GetMapping("Max_uID")
	@ResponseBody
	public int getMaxUserID() throws SQLException {
		int maxID = 0;
		Connection con = ConnectionProvider.getCon();
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery("select max(uid) from users");
		while (rs.next()) {
			maxID = rs.getInt(1);
		}
		return maxID;
	}

	// to get list of Users by ID
	@GetMapping("Users/{uid}")
	@ResponseBody
	public Optional<Users> getUsersByID(@PathVariable("uid") int uid) {
		return usersrepo.findById(uid);
	}

	// to add an appointment
	@PostMapping("bookAppointment")
	public void insertAppointments(@RequestBody Appointments Appointments) {
		try {
			appointmentsrepo.save(Appointments);
			System.out.println("appointment booked");
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	// to sign up a user
	@PostMapping("signup")
	public void insertUsers(@RequestBody Users Users) {
		try {
			usersrepo.save(Users);
			System.out.println("Signup successful");
		} catch (Exception e) {
			System.out.println(e);
		}

	}

	// to delete an appointment
	@DeleteMapping("deleteAppointments/{uid}")
	@ResponseBody
	public void deleteUser(@PathVariable("uid") int uid) {
		appointmentsrepo.deleteById(uid);
		System.out.println("deleted appointment with id: " + uid);
	}

	// to edit an appointment
	@PutMapping(path = "/update", consumes = { "application/json" })
	@ResponseBody
	public Appointments updateUser(@RequestBody Appointments Appointments) {
		appointmentsrepo.save(Appointments);
		System.out.println("updated data");
		return Appointments;
	}

	@GetMapping("/loginAction")
	public void loginAction(HttpServletResponse response, HttpServletRequest request, HttpSession session)
			throws IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		int flag = 0;

		try {
			Connection con = ConnectionProvider.getCon();
			Statement st = con.createStatement();
			ResultSet rs = st
					.executeQuery(
							"select * from users where fullname='" + username + "' and password='" + password + "'");

			while (rs.next()) {
				flag = 1;
				response.sendRedirect("appointments");
			}
			if (flag == 0) {
				response.sendRedirect("login?msg=invalid");
			}
		} catch (Exception e) {
			response.sendRedirect("login?msg=error");
			e.printStackTrace();
		}
	}
}