package com.backend.assignment14_backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.backend.assignment14_backend.entities.Patients;

public interface patientsRepo extends JpaRepository<Patients, Integer> {

    // all 3
    @Query(value = "SELECT * FROM Patients p WHERE p.firstname like %?1% and p.lastname like %?2% and p.phone like %?3% ", nativeQuery = true)
    List<Patients> findExistingPatients(String firstname, String lastname, String phone);

    // firstname
    @Query(value = "SELECT * FROM Patients p WHERE p.firstname like %?1% ", nativeQuery = true)
    List<Patients> findExistingPatients_fn(String firstname);

    // lastname
    @Query(value = "SELECT * FROM Patients p WHERE p.lastname like %?1% ", nativeQuery = true)
    List<Patients> findExistingPatients_ln(String lastname);

    // phone
    @Query(value = "SELECT * FROM Patients p WHERE p.phone like %?1% ", nativeQuery = true)
    List<Patients> findExistingPatients_ph(String phone);

    // firstname, phone
    @Query(value = "SELECT * FROM Patients p WHERE p.firstname like %?1% and p.phone like %?2% ", nativeQuery = true)
    List<Patients> findExistingPatients_fn_ph(String firstname, String phone);

    // lastname, phone
    @Query(value = "SELECT * FROM Patients p WHERE p.lastname like %?1% and p.phone like %?2% ", nativeQuery = true)
    List<Patients> findExistingPatients_ln_ph(String lastname, String phone);

    // firstname, lastname
    @Query(value = "SELECT * FROM Patients p WHERE p.firstname like %?1% and p.lastname like %?2% ", nativeQuery = true)
    List<Patients> findExistingPatients_fn_ln(String firstname, String lastname);

}
