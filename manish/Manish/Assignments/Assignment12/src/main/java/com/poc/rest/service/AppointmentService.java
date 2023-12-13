package com.poc.rest.service;

import java.util.List;

import com.poc.rest.entity.Appointments;

public interface AppointmentService {
    
    public List<Appointments> getAppointments();

    public void save(Appointments Appointments);

    public Appointments findById(Integer id);

    public void delete(Appointments Appointments);

    public void deleteAll();
}
