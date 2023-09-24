package com.app.serivce;

import java.util.List;
import com.appmodel.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repo.EventRepository;
@Service
public class EventServiceImpl implements EventService {
  
	@Autowired
	private EventRepository eventRepo;
	
	@Override
	public List <Event> getEvent() {
		return eventRepo.findAll();
	}
	
	@Override
	public void save(Event event) {
		eventRepo.save(event);
	}
	
	@Override
	public Event findById(Long id) {
	return eventRepo.findById(id).get();
	}
	
	@Override
	public void delete(Event event) {
		eventRepo.delete(event);
	}
}
