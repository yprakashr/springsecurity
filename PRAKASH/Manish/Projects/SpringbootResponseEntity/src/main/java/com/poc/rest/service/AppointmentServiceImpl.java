package com.poc.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.poc.rest.dao.AppointmentsRepo;
import com.poc.rest.entity.Appointments;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentsRepo appointmentsrepo;

    @Override
    public List<Appointments> getAppointments() {
        return appointmentsrepo.findAll();
    }

    @Override
    public void save(Appointments appointment) {
        appointmentsrepo.save(appointment);
    }

    @Override
    public Appointments findById(Integer id) {
        return appointmentsrepo.findById(id).get();
    }

    @Override
    public void delete(Appointments appointment) {
        appointmentsrepo.delete(appointment);
    }

    @Override
    public void deleteAll() {
        appointmentsrepo.deleteAll();
    }

}
