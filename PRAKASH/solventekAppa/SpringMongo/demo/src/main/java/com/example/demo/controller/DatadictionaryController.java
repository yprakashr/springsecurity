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
import com.example.demo.model.Datadictionary;
import com.example.demo.service.DatadictionaryService;

@RestController
@RequestMapping("/datadictionary")
@CrossOrigin(origins = "*")
public class DatadictionaryController {

	
	Map<String, Object> map = new LinkedHashMap<String, Object>();
	
	@Autowired
	DatadictionaryService datadictionaryService;
	
	@GetMapping
    public ResponseEntity<?> getAllDatadictionary() {
		List<Datadictionary> datadictionaryList = datadictionaryService.getAllDatadictionary();	
		if(!datadictionaryList.isEmpty()) {
           map.clear();
           map.put("status", 200);
           map.put("data", datadictionaryList);
           map.put("message", "Data found Successfully");
           return new ResponseEntity<>(map,HttpStatus.OK);
		}else {
   		 map.clear();
            map.put("status", 204);
            map.put("message", "Data not found");
            return new ResponseEntity<>(map,HttpStatus.NO_CONTENT);}
		    }
	
	
	
	  @GetMapping("/{id}")
	    public ResponseEntity<?> getDatadictionaryById(@PathVariable("id") Long id) {
	        Optional<Datadictionary> datadictionary = datadictionaryService.getDatadictionaryById(id);
	        System.out.println(datadictionary.get().getProjectId());
	        if (!datadictionary.isEmpty()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", datadictionary);
	            return new ResponseEntity<>(datadictionary.get(), HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 404);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	  
	  
	  
	  	@GetMapping("/project/{id}")
	    public ResponseEntity<?> getDatadictionaryByProjectId(@PathVariable("id") Long id) {
	        List<Datadictionary> datadictionary = datadictionaryService.getDatadictionaryByProjectId(id);
	        
	        if (!datadictionary.isEmpty()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", datadictionary);

	            return new ResponseEntity<>(datadictionary, HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 404);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	  
	  
	  
	  	@PostMapping
	    public ResponseEntity<?> createDatadictionary(@RequestBody Datadictionary datadictionary) {
	  		
	        try {
	        	datadictionary.setDdid((long) 4);
		        datadictionaryService.createDatadictionary(datadictionary);
	        	 map.clear();
	             map.put("status", 200);
	             map.put("data", datadictionary);
	             map.put("message", "Data modal saved successfully");
	 	        return new ResponseEntity<>(map, HttpStatus.CREATED);
	        	}catch(Exception e) {
	           	 map.clear();
	             map.put("status", 500);
	             map.put("message", "Internal Server Error");
	             return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	        	}
	            
	    }
	  
	  
	  
	  	@PutMapping("/{id}")
	    public ResponseEntity<?> updateInsurance(@PathVariable("id") long id, @RequestBody Datadictionary insurance) {
	  	try {
	  			  Datadictionary updatedInsurance = datadictionaryService.updateInsurance(id, insurance);     
	  			  map.clear();
	  	    	         map.put("status", 200);
	  		             map.put("data", updatedInsurance);
	  	    	         map.put("message", "Data updated successfully");
	  	    	         return new  ResponseEntity<>(map,HttpStatus.OK);   
	  	    	 }catch(Exception e){
	  	    		 map.clear();
	  		         map.put("status", 500);
	  		         map.put("message", "Internal server error");   
	  		         return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
	  	    	 }}
	    

	  
	  	@DeleteMapping("/{id}")
	    public ResponseEntity<?> deleteDatadictionaryById(@PathVariable("id") Long id) {
	  		Optional<Datadictionary> datadictionary = datadictionaryService.getDatadictionaryById(id);
	  		if(datadictionary.get().getDdid()==id) {
	    	   	 try {
	    	   	   datadictionaryService.deleteDatadictionaryById(id);
	    		       map.clear();
	    		         map.put("status", 200);
	    		         map.put("message", "Data modal deleted successfully");
	    		         return new  ResponseEntity<>(map,HttpStatus.OK);   
	    		 }catch(Exception e){
	    			 map.clear();
	    	         map.put("status", 500);
	    	         map.put("message", "Internal server error");
	    	         return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);    
	    		 }}else {
	    			 map.clear();
	  		         map.put("status", 400);
	  		         map.put("message", "Data not Found");   
	  		         return new  ResponseEntity<>(map,HttpStatus.BAD_REQUEST);  
	    		 }}
	  
	  
	
	
}
