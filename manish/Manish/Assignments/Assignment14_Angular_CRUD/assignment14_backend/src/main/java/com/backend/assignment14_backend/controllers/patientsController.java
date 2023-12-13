package com.backend.assignment14_backend.controllers;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.assignment14_backend.dao.patientsRepo;
import com.backend.assignment14_backend.entities.Patients;
import com.backend.assignment14_backend.service.patients.PatientService;

@RestController
@RequestMapping("backend")
@CrossOrigin(origins = "http://localhost:4200")
public class patientsController {

    @Autowired
    private PatientService pService;

    @Autowired
    private patientsRepo repo;

    Map<String, Object> map = new LinkedHashMap<String, Object>();
    List<Patients> patients;

    // all patients
    @GetMapping("/patients")
    public ResponseEntity<?> getPatients() {
        patients = pService.getPatients();
        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    // post patients
    @PostMapping("/patients")
    public ResponseEntity<?> savePatient(@RequestBody Patients patients) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            pService.savePatient(patients);
            map.put("status", 201);
            map.put("message", "Record is Saved Successfully!");
            return new ResponseEntity<>(map, HttpStatus.CREATED);
        } catch (Exception e) {
            map.clear();
            map.put("status", 500);
            map.put("message", "Internal server error");
            return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // get patients by id
    @GetMapping("/patients/{id}")
    public ResponseEntity<?> getPatientById(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Patients patients = pService.getPatientById(id);
            System.out.println(patients);
            map.put("status", 200);
            map.put("data", patients);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }

    }

    // get patients by firstname, lastname, phone
    @GetMapping("/patients_fn_ln_ph/{fn}/{ln}/{ph}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients(@PathVariable Map<String, String> pathVarsMap) {

        String fn = pathVarsMap.get("fn");
        String ln = pathVarsMap.get("ln");
        String ph = pathVarsMap.get("ph");

        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients(fn, ln, ph);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    // get patients by firstname
    @GetMapping("/patients_fn/{fn}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_fn(@PathVariable Map<String, String> pathVarsMap) {

        String fn = pathVarsMap.get("fn");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_fn(fn);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // get patients by lastname
    @GetMapping("/patients_ln/{ln}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_ln(@PathVariable Map<String, String> pathVarsMap) {

        String ln = pathVarsMap.get("ln");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_ln(ln);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    // get patients by phone
    @GetMapping("/patients_ph/{ph}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_ph(@PathVariable Map<String, String> pathVarsMap) {

        String ph = pathVarsMap.get("ph");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_ph(ph);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // get patients by firstname, lastname
    @GetMapping("/patients_fn_ln/{fn}/{ln}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_fn_ln(@PathVariable Map<String, String> pathVarsMap) {

        String fn = pathVarsMap.get("fn");
        String ln = pathVarsMap.get("ln");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_fn_ln(fn, ln);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // get patients by firstname, phone
    @GetMapping("/patients_fn_ph/{fn}/{ph}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_fn_ph(@PathVariable Map<String, String> pathVarsMap) {

        String fn = pathVarsMap.get("fn");
        String ph = pathVarsMap.get("ph");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_fn_ph(fn, ph);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // get patients by lastname, phone
    @GetMapping("/patients_ln_ph/{ln}/{ph}")
    @ResponseBody
    public ResponseEntity<?> getExistingPatients_ln_ph(@PathVariable Map<String, String> pathVarsMap) {

        String ln = pathVarsMap.get("ln");
        String ph = pathVarsMap.get("ph");
        map = new LinkedHashMap<String, Object>();
        patients = repo.findExistingPatients_ln_ph(ln, ph);

        try {
            if (!patients.isEmpty()) {
                map.put("status", 200);
                map.put("data", patients);
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 404);
                map.put("message", "Data is not found");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception ex) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    // delete patient by ID
    @DeleteMapping("patients/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable("id") int ID) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Patients patient = pService.getPatientById(ID);
            pService.deletePatient(patient);
            map.put("status", 200);
            map.put("message", "Record is deleted Successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }

    // update patient
    @PutMapping("/patients/{id}")
    public ResponseEntity<?> updatePatient(@PathVariable("id") int ID, @RequestBody Patients patientData) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            System.out.println(ID);
            Patients patient = pService.getPatientById(ID);
            patient.setId(patientData.getId());
            patient.setFirstname(patientData.getFirstname());
            patient.setLastname(patientData.getLastname());
            patient.setAge(patientData.getAge());
            patient.setPhone(patientData.getPhone());
            patient.setGender(patientData.getGender());
            patient.setDate(patientData.getDate());
            patient.setTime(patientData.getTime());
            pService.updatePatient(patient);
            map.put("status", 200);
            map.put("message", "Record is updated Successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", 404);
            map.put("message", "Data not found");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
    }
}