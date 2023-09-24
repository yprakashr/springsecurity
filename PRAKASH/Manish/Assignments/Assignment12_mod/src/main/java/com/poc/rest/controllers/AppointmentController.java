package com.poc.rest.controllers;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.poc.rest.connection.ConnectionProvider;
import com.poc.rest.entity.Appointments;
import com.poc.rest.service.AppointmentService;

@RestController
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentservice;

    @GetMapping("/appointments")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> getAppointments() {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        List<Appointments> appointmentsList = appointmentservice.getAppointments();
        if (!appointmentsList.isEmpty()) {
            map.put("status", 1);
            map.put("data", appointmentsList);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } else {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/appointments")
    public ResponseEntity<?> saveAppointment(@RequestBody Appointments appointments) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        appointmentservice.save(appointments);
        map.put("status", 1);
        map.put("message", "Record is Saved Successfully!");
        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

    @GetMapping("/appointments/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> getAppointmentById(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Appointments appointments = appointmentservice.findById(id);
            map.put("status", 1);
            map.put("data", appointments);
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/appointments/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> deleteAppointment(@PathVariable Integer id) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Appointments appointments = appointmentservice.findById(id);
            appointmentservice.delete(appointments);
            map.put("status", 1);
            map.put("message", "Record is deleted successfully!");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @PutMapping("/appointments/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> updateAppointmentById(@PathVariable Integer id,
            @RequestBody Appointments appointmentDetail) {
        Map<String, Object> map = new LinkedHashMap<String, Object>();
        try {
            Appointments appointment = appointmentservice.findById(id);
            appointment.setId(appointmentDetail.getId());
            appointment.setFirstname(appointmentDetail.getFirstname());
            appointment.setLastname(appointmentDetail.getLastname());
            appointment.setAge(appointmentDetail.getAge());
            appointment.setPhonenumber(appointmentDetail.getPhonenumber());
            appointment.setGender(appointmentDetail.getGender());
            appointment.setDate(appointmentDetail.getDate());
            appointment.setTime(appointmentDetail.getTime());
            appointment.setCity(appointmentDetail.getCity());
            appointment.setArea(appointmentDetail.getArea());
            appointment.setVaccination_status(appointmentDetail.getVaccination_status());
            appointment.setSymptoms(appointmentDetail.getSymptoms());
            appointment.setAdd_info(appointmentDetail.getAdd_info());
            appointmentservice.save(appointment);
            map.put("status", 1);
            map.put("message", "Data updated succesfully");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (Exception ex) {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/appointments")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> deleteAll() {
        Map<String, Object> map = new LinkedHashMap<>();
        try {
            List<Appointments> appointmentsList = appointmentservice.getAppointments();
            if (!appointmentsList.isEmpty()) {
                appointmentservice.deleteAll();
                map.put("status", 1);
                map.put("message", "Deleted all entries");
                return new ResponseEntity<>(map, HttpStatus.OK);
            } else {
                map.clear();
                map.put("status", 0);
                map.put("message", "No data to delete");
                return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            map.clear();
            map.put("status", 0);
            map.put("message", "Data is not found");
            return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/Max_aID")
    @CrossOrigin(origins = "http://localhost:4200")
    @ResponseBody
    public int getMAxAppID() throws SQLException {
        int maxID = 0;
        Connection con = ConnectionProvider.getCon();
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select max(id) from appointments");
        while (rs.next()) {
            maxID = rs.getInt(1);
        }
        return maxID;
    }
}
