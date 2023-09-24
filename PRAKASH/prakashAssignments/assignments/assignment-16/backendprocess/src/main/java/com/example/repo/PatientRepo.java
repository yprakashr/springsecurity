package com.example.repo;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.Patient;
@Repository
public interface PatientRepo extends JpaRepository<Patient, Long>{

	@Query(value = "SELECT * FROM Patient p WHERE p.full_name like %?1% or p.age like %?2% or p.phoneno like %?3% ", nativeQuery = true)
	List<Patient> findExistingPatients(String fullName, String age, String phoneno);
	 
}
