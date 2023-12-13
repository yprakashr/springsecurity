package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MyController {

	@Autowired
	UsersRepo repo;
	
	@RequestMapping("/Ass10")
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index.html");
		return mv;
	}

	// to get list of all users
	@GetMapping("Ass10/users")
	@ResponseBody
	public List<Users> getUsers() {
		return (List<Users>) repo.findAll();
	}

	// to get list of users by ID
	@GetMapping("Ass10/users/{uid}")
	@ResponseBody
	public Optional<Users> getUserByID(@PathVariable("uid") int uid) {
		return repo.findById(uid);
	}

	// to add a user
	@PostMapping("Ass10/addUsers")
	@ResponseBody
	public Users insertUsers(@RequestBody Users users) {
		repo.save(users);
		return users;
	}

	// to delete a user
	@DeleteMapping("Ass10/deleteUsers/{uid}")
	@ResponseBody
	public List<Users> deleteUser(@PathVariable("uid") int uid) {
		repo.deleteById(uid);
		return (List<Users>) repo.findAll();
	}

	// to edit a user
	@PutMapping(path = "Ass10/editUsers", consumes = { "application/json" })
	@ResponseBody
	public Users updateUser(@RequestBody Users users) {
		repo.save(users);
		return users;
	}
}
