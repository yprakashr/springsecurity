package com.app.controller;

import java.util.List;
import java.util.LinkedHashMap;
import java.util.Map;
import com.appmodel.Event;

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

import com.app.serivce.EventService;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "*")
public class EventController {
	
	
	@Autowired
	private EventService eventService;
	
	
	@GetMapping
	public ResponseEntity<?> getEvent() {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		List<Event> eventList = eventService.getEvent();
		if (!eventList.isEmpty()) {
			map.put("status", 1);
			map.put("data", eventList);
			return new ResponseEntity<>(map, HttpStatus.OK);
		} else {
			map.clear();
			map.put("status", 0);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping
	public ResponseEntity<?> saveEvent(@RequestBody Event event) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		eventService.save(event);
		map.put("status", 1);
		map.put("message", "Record is Saved Successfully!");
		return new ResponseEntity<>(map, HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getEventById(@PathVariable Long id) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			Event event = eventService.findById(id);
			map.put("status", 1);
			map.put("data", event);
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 0);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			Event event = eventService.findById(id);
			eventService.delete(event);
			map.put("status", 1);
			map.put("message", "Record is deleted successfully!");
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 0);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserById(@PathVariable Long id, @RequestBody Event eventDetail) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			Event event = eventService.findById(id);
			event.setWorkflow_id(eventDetail.getWorkflow_id());
			event.setWorkflow_name(eventDetail.getWorkflow_name());
			event.setBot_id(eventDetail.getBot_id());
			event.setBot_name(eventDetail.getBot_name());
			event.setStart_date(eventDetail.getStart_date());
			event.setEnd_date(eventDetail.getEnd_date());
			event.setStart_time(eventDetail.getStart_time());
			event.setEnd_time(eventDetail.getEnd_time());
			event.setLabel(eventDetail.getLabel());
			event.setDescription(eventDetail.getDescription());
			eventService.save(event);
			map.put("status", 1);
			map.put("data", eventService.findById(id));
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 0);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}
}
