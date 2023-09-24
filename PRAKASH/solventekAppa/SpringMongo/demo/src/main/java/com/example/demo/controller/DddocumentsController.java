package com.example.demo.controller;

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

import com.example.demo.model.Dddocuments;
import com.example.demo.service.DddocumentsService;



@RestController
@RequestMapping("/dddocuments")
@CrossOrigin(origins = "*")
public class DddocumentsController {

	@Autowired
	DddocumentsService dddocumentsService;
	
	   Map<String, Object> map = new LinkedHashMap<String, Object>();

	
	  @GetMapping
	    public ResponseEntity<?> getAllDddocuments() {
	        List<Dddocuments> dddocumentsList = dddocumentsService.getAllDddocuments();
	    	if(!dddocumentsList.isEmpty()) {
	            map.clear();
	            map.put("status", 200);
	            map.put("data", dddocumentsList);
	            map.put("message", "Data found Successfully");
	            return new ResponseEntity<>(map,HttpStatus.OK);
	    	}else {
	    		 map.clear();
	             map.put("status", 204);
	             map.put("message", "Internal Server Error");
	             return new ResponseEntity<>(map,HttpStatus.NO_CONTENT);}
	    }
	
	  
	  @GetMapping("/{id}")
	    public ResponseEntity<Dddocuments> getDddocumentsById(@PathVariable("id") Long id) {
	        Optional<Dddocuments> dddocuments = dddocumentsService.getDddocumentsById(id);
	        if (dddocuments.isPresent()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", dddocuments);
	            return new ResponseEntity<>(dddocuments.get(), HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 404);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	  }
	  
	  
	  
	  @PostMapping
	  public ResponseEntity<?> createDddocuments(@RequestBody Dddocuments dddocuments) { 
	      try {
			  dddocuments.setDdid((long) 1);
		 dddocumentsService.createDddocuments(dddocuments);
	        	 map.clear();
	             map.put("status", 200);
	             map.put("message", "data saved successfully");
	 	        return new ResponseEntity<>(map, HttpStatus.CREATED);
	        	}catch(Exception e) {
	           	 map.clear();
	             map.put("status", 500);
	             map.put("message", "Internal Server Error");
	             return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	        	}
	  }
	  
	  
	  
	  @PutMapping("/{id}")
	  public ResponseEntity<?> updateDddocuments(@PathVariable("id") long id, @RequestBody Dddocuments dddocuments) {
	      Dddocuments updatedDddocuments = dddocumentsService.updateDddocuments(id, dddocuments);
	      if (updatedDddocuments != null) {
		    	       map.clear();
		    	         map.put("status", 200);
		    	         map.put("message", "Data updated successfully");
		    	         return new  ResponseEntity<>(map,HttpStatus.OK);   
	      } else {
	    		 map.clear();
		         map.put("status", 500);
		         map.put("message", "Internal server error");   
		         return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	      }
	  }
	  
	  @DeleteMapping("/{id}")
	  public ResponseEntity<?> deleteDddocuments(@PathVariable("id") long id) {
	 
	 	 try {
		      boolean deleted = dddocumentsService.deleteDddocuments(id);
 		       map.clear();
 		         map.put("status", 200);
 		         map.put("message", "Data deleted successfully");
 		         return new  ResponseEntity<>(map,HttpStatus.OK);   
 		 }catch(Exception e){
 			 map.clear();
 	         map.put("status", 500);
 	         map.put("message", "Internal server error");
 	         
 	    return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
 		 }
	      
	  }
	      
	      
}
