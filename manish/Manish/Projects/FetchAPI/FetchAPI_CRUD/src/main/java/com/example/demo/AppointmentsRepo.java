package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface AppointmentsRepo extends CrudRepository<Appointments, Integer> {

}
