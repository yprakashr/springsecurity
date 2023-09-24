package com.poc.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poc.rest.entity.Appointments;

public interface AppointmentsRepo extends JpaRepository<Appointments, Integer> {

}
