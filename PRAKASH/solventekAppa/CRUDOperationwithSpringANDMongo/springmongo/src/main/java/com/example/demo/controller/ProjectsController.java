package com.example.demo.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Projects;
import com.example.springmongo.service.ProjectService;


@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectsController {

	@Autowired
	ProjectService projectService;
	
	Map<String, Object> map = new LinkedHashMap<String, Object>();

	  @GetMapping
	    public ResponseEntity<?> getAllProjects() {
	        List<Projects> projectsList = projectService.getAllProjects();
	    	if(!projectsList.isEmpty()) {
	            map.clear();
	            map.put("status", 200);
	            map.put("data", projectsList);
	            map.put("message", "Data found Successfully");
	            return new ResponseEntity<>(map,HttpStatus.OK);
	    	}else {
	    		 map.clear();
	             map.put("status", 500);
	             map.put("message", "Data not found");
	             return new ResponseEntity<>(map,HttpStatus.NO_CONTENT);}
	    }
	
	  
	  @GetMapping("/{id}")
	    public ResponseEntity<Projects> getProjectsById(@PathVariable("id") Long id) {
	        Optional<Projects> projects =projectService.getProjectsById(id);
	        if (projects.isPresent()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", projects);
	            return new ResponseEntity<>(projects.get(), HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 204);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        }
	  }
	  
	  
	  
	  @PostMapping
	  public ResponseEntity<?> createProjects(@RequestBody Projects projects) { 
		  System.out.println(projects);
		  DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");  
		   LocalDateTime now = LocalDateTime.now();  
	      try {
	    	  projects.setId((long) 2);
	    	  projects.setFlag(true);
	    	  projects.setCreateddate(dtf.format(now));
	    	  projectService.createProjects(projects);
	        	 map.clear();
	             map.put("status", 200);
	             map.put("message", "data saved successfully");
	 	        return new ResponseEntity<>(map, HttpStatus.CREATED);
	        	}catch(Exception e) {
	           	 map.clear();
	             map.put("status", 500);
	             map.put("message", "Internal Server Error");
	             return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	        	}}
	  
	  
	  
	  @PutMapping("/{id}")
	  public ResponseEntity<?> updateProjects(@PathVariable("id") long id, @RequestBody Projects projects) {
	      Projects updatedProjects = projectService.updateProjects(id, projects);
	      if (updatedProjects != null) {
		    	       map.clear();
		    	         map.put("status", 200);
		    	         map.put("message", "Data updated successfully");
		    	         return new  ResponseEntity<>(map,HttpStatus.OK);   
	      } else {
	    		 map.clear();
		         map.put("status", 204);
		         map.put("message", "data not found");   
		         return new  ResponseEntity<>(map,HttpStatus.NO_CONTENT);
	      }
	  }
	  
	  @DeleteMapping("/{id}")
	  public ResponseEntity<?> deleteProgrammers(@PathVariable("id") long id) {
	 	 try {
		      projectService.deleteProgrammers(id);
 		       map.clear();
 		         map.put("status", 200);
 		         map.put("message", "Data deleted successfully");
 		         return new  ResponseEntity<>(map,HttpStatus.OK);   
 		 }catch(Exception e){
 		 	 map.clear();
 	         map.put("status", 500);
 	         map.put("message", "Internal server error");    
 	         return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
 		 }}
	      
}
