package com.example.controller;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.Patient;
import com.example.repo.PatientRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

	
	@Autowired
	PatientRepo patientRepo;
	
	
	
	
	@PostMapping("/registe")
	public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient) {
		return new ResponseEntity<Patient>(patientRepo.save(patient),HttpStatus.CREATED);
	}
	
	

	@GetMapping("/get")
	public
	ResponseEntity<?>
	getDetails(){
	Map< String, Object> map=new LinkedHashMap<String,Object>();
	List<Patient> patient=patientRepo.findAll();
	if(!patient.isEmpty()) {
		map.put("status", 200);
		map.put("data",patient );
		return new ResponseEntity<>(map,HttpStatus.OK);
	}else {
		map.clear();
		map.put("status", 404);
		map.put("message","data not found");
		return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
	}
}





	@GetMapping("/search")
	public ResponseEntity<?> getExistingPatients(@RequestParam Map<String, String> patient) {

	String phone1=patient.get("phoneno");
	String age1=patient.get("age");
	String name=patient.get("fullName");
	
	System.out.println(phone1);
	System.out.println(age1);
	System.out.println(name);
	Map< String, Object> map=new LinkedHashMap<String,Object>();
	List<Patient> response=	patientRepo.findExistingPatients(name,age1,phone1);
	
	if(!patient.isEmpty()) {
		map.put("status", 200);
		map.put("data",response );
		return new ResponseEntity<>(map,HttpStatus.OK);
	}else {
		map.clear();
		map.put("status", 404);
		map.put("message","data not found");
		return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
	}
  }

	@PutMapping("/update/{id}")
	public ResponseEntity<Patient> updateById(@PathVariable long id,@RequestBody Patient patients){
	Optional<Patient> patient=patientRepo.findById(id);
			System.out.println(id);
	if(patient.isPresent()) {
		patient.get().setFullName(patients.getFullName());
		patient.get().setAge(patients.getAge());
		patient.get().setDate(patients.getDate());
		patient.get().setPhoneno(patients.getPhoneno());
		patient.get().setTime(patients.getTime());
		return new ResponseEntity<>(patientRepo.save(patient.get()),HttpStatus.OK);
	}else {
		return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
	}}



	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Patient> deleteById(@PathVariable long id){
	Optional<Patient> patient=patientRepo.findById(id);
	if(patient.isPresent()) {
		patientRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}else {
		return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
	}
}
}




















