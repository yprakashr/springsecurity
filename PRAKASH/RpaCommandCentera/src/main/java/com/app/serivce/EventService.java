package com.app.serivce;

import com.appmodel.Event;
import java.util.List;

import org.springframework.stereotype.Service;
@Service
public interface EventService {
   
	public List<Event> getEvent();
	public void save(Event event);
	public Event findById(Long id);
	public void delete(Event event);
	
}
