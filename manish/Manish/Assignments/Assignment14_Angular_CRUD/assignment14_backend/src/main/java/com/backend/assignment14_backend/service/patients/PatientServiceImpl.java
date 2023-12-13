package com.backend.assignment14_backend.service.patients;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.assignment14_backend.dao.patientsRepo;
import com.backend.assignment14_backend.entities.Patients;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private patientsRepo repo;

    @Override
    public List<Patients> getPatients() {
        return repo.findAll();
    }

    @Override
    public void savePatient(Patients patient) {
        repo.save(patient);
    }

    @Override
    public Patients getPatientById(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public List<Patients> getExistingPatients(String firstname, String lastname, String phone) {
        return repo.findExistingPatients(firstname, lastname, phone);
    }

    @Override
    public void deletePatient(Patients patient) {
        repo.delete(patient);
    }

    @Override
    public void updatePatient(Patients patient) {
        repo.save(patient);
    }

}
