package com.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.appmodel.Event;

public interface EventRepository extends MongoRepository<Event, Long> {

}
