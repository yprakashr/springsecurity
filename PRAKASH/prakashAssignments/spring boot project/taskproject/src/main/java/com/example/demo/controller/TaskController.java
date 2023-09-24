package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.payload.Taskdto;
import com.example.demo.service.TaskService;

@RestController
@RequestMapping("/api")
public class TaskController {
	@Autowired
	private TaskService taskservice;
		
		@PostMapping("/{userid}/tasks")
		public ResponseEntity<Taskdto> saveTask(@PathVariable(name="userid") long userid,@RequestBody Taskdto taskdto){
			return new ResponseEntity<>(taskservice.saveTask(userid, taskdto),HttpStatus.CREATED);
		}
		
		
		@PreAuthorize(value="ROLE_ADMIN")
		@GetMapping("/{userid}/tasks")
		public ResponseEntity<List<Taskdto>> getAllTasks(@PathVariable(name="userid")long userid){
			return new ResponseEntity<>(taskservice.getAllTasks(userid),HttpStatus.OK);
		}
		
		@GetMapping("/{userid}/tasks/{taskid}")
		public ResponseEntity<Taskdto> getTask(@PathVariable(name="userid")long userid,@PathVariable(name="taskid")long taskid){
			return new ResponseEntity<>(taskservice.getTask(userid, taskid),HttpStatus.OK);
		}
		
		@DeleteMapping("/{userid}/tasks/{taskid}")
		public ResponseEntity<String> deleteTask(@PathVariable(name="userid")long userid,@PathVariable(name="taskid")long taskid){
			taskservice.deleteTask(userid, taskid);
			return new ResponseEntity<>("User deleted successfully",HttpStatus.OK);
		}
}




