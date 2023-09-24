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

import com.example.demo.model.Botresponsedata;
import com.example.demo.model.DataModals;
import com.example.demo.service.BotResponseDataService;


@RestController
@RequestMapping("/botresponsedata")
@CrossOrigin(origins = "*")
public class BotresponsedataController {

	
	   Map<String, Object> map = new LinkedHashMap<String, Object>();
	@Autowired
	BotResponseDataService botResponseDataService;
	
	
	
	@GetMapping
    public ResponseEntity<?> getAllBotResponse() {
		 List<Botresponsedata> BotResponseList = botResponseDataService.getAllBotResData();
		if(!BotResponseList.isEmpty()) {
            map.clear();
            map.put("status", 200);
            map.put("data", BotResponseList);
            map.put("message", "Data found Successfully");
            return new ResponseEntity<>(map,HttpStatus.OK);
    	}else {
    		 map.clear();
             map.put("status", 204);
             map.put("message", "Data not found");
             return new ResponseEntity<>(map,HttpStatus.NO_CONTENT);}
		    }
	
	
	
	  @GetMapping("/{id}")
	    public ResponseEntity<?> getBotResponseById(@PathVariable("id") Long id) {
	        Optional<Botresponsedata> BotResponse = botResponseDataService.getBotResDataById(id);
	        if (BotResponse.isPresent()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", BotResponse);
	            return new ResponseEntity<>(BotResponse.get(), HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 404);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	  
	  
	  
	  @GetMapping("/project/{id}")
	    public ResponseEntity<?> getBotResponseByProjectId(@PathVariable("id") Long id) {
	        Optional<Botresponsedata[]> BotResponse = botResponseDataService.getBotResDatayByProjectId(id);
	        if (BotResponse.isPresent()) {
	        	   map.clear();
		            map.put("status", 200);
		            map.put("message", "Data found successfully");
		            map.put("data", BotResponse);
	            return new ResponseEntity<>(BotResponse.get(), HttpStatus.OK);
	        } else {
	        	  map.clear();
	              map.put("status", 404);
	              map.put("message", "Data not found");
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	  
	  
	  
	  @PostMapping
	    public ResponseEntity<?> createBotResponse(@RequestBody Botresponsedata BotResponse) {
	        try {
	        	BotResponse.setId((long) 1);
		        botResponseDataService.createBotResData(BotResponse);
	        	 map.clear();
	             map.put("status", 200);
	             map.put("data", BotResponse);
	             map.put("message", "Data saved successfully");
	 	        return new ResponseEntity<>(map, HttpStatus.CREATED);
	        	}catch(Exception e) {
	           	 map.clear();
	             map.put("status", 500);
	             map.put("message", "Internal Server Error");
	             return new  ResponseEntity<>(map,HttpStatus.INTERNAL_SERVER_ERROR);
	        	}
	            
	    }
	  
		@PutMapping("/{id}")
		public ResponseEntity<?> updateBotResponseReview(@PathVariable("id") long id, @RequestBody Botresponsedata responseData) {
			try {
				Botresponsedata resData = botResponseDataService.getBotResDataById(id).get();
				List<DataModals> DataModals = resData.getDataModals();
				List<DataModals> updatedDataModals = responseData.getDataModals();

				for (int i = 0; i < DataModals.size(); i++) {
					DataModals.get(i).setValue(DataModals.get(i).getValue());
					for (int j = 0; j < DataModals.get(i).getObject().size(); j++) {
						DataModals.get(i).getObject().get(j)
								.setValue(DataModals.get(i).getObject().get(j).getValue());
					}
				}

				for (int i = 0; i < DataModals.size(); i++) {
					DataModals.get(i).setUpdated_value(updatedDataModals.get(i).getUpdated_value());
					for (int j = 0; j < DataModals.get(i).getObject().size(); j++) {
						DataModals.get(i).getObject().get(j)
								.setUpdated_value(updatedDataModals.get(i).getObject().get(j).getUpdated_value());
					}
				}
				resData.setFlag(true);
				resData.setDataModals(DataModals);
				botResponseDataService.updateBotResData(resData);
				map.clear();
				map.put("status", 200);
				map.put("message", "Data updated successfully");
				return new ResponseEntity<>(map, HttpStatus.OK);
			} catch (Exception e) {
				map.clear();
				map.put("status", 500);
				map.put("message", e.getMessage());
				return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	  
	  
	 
	  
	  
	  
	
}
