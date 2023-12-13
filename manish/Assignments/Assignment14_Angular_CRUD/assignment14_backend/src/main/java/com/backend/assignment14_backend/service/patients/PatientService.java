package com.backend.assignment14_backend.service.patients;

import java.util.List;

import com.backend.assignment14_backend.entities.Patients;

public interface PatientService {
    public List<Patients> getPatients();

    public void savePatient(Patients patient);

    public Patients getPatientById(Integer id);

    public List<Patients> getExistingPatients(String firstname, String lastname, String phone);

    public void deletePatient(Patients patient);

    public void updatePatient(Patients patient);
}
