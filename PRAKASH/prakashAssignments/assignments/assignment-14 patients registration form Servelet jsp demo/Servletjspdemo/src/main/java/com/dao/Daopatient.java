package com.dao;

import com.entity.Patient;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Daopatient {

  private Connection con;

  public Daopatient(Connection con) {
    super();
    this.con = con;
  }

  public boolean addPatient(Patient p) {
    boolean f = false;
    String insert = "insert into patient(name,dob,email,phone)values(?,?,?,?)";

    try {
      PreparedStatement pst = con.prepareStatement(insert);
      pst.setString(1, p.getFullname());
      pst.setString(2, p.getDOB());
      pst.setString(3, p.getEmail());
      pst.setString(4, p.getNumber());

      int i = pst.executeUpdate();
      if (i == 1) {
        f = true;
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return f;
  }

  public List<Patient> getAllPatients() {
    List<Patient> list = new ArrayList();
    Patient p = null;
    try {
      String sql = "select * from patient";
      PreparedStatement pst = con.prepareStatement(sql);
      ResultSet rs = pst.executeQuery();
      while (rs.next()) {
        p = new Patient();
        p.setId(rs.getInt(1));
        p.setFullname(rs.getString(2));
        p.setDOB(rs.getString(3));
        p.setEmail(rs.getString(4));
        p.setNumber(rs.getString(5));
        list.add(p);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }

    return list;
  }

  public Patient getPatientById(int id) {
    Patient p = null;
    try {
      String sql = "select * from patient where id=?";
      PreparedStatement pst = con.prepareStatement(sql);

      pst.setInt(1, id);
      ResultSet rs = pst.executeQuery();
      while (rs.next()) {
        p = new Patient();
        p.setId(rs.getInt(1));
        p.setFullname(rs.getString(2));
        p.setDOB(rs.getString(3));
        p.setEmail(rs.getString(4));
        p.setNumber(rs.getString(5));
      }
    } catch (Exception e) {
      e.printStackTrace();
    }

    return p;
  }

  public boolean updatePatient(Patient p) {
    boolean f = false;
    String insert =
      "update patient set name=?,dob=?,email=?,phone=? where id=?";

    try {
      PreparedStatement pst = con.prepareStatement(insert);
      pst.setString(1, p.getFullname());
      pst.setString(2, p.getDOB());
      pst.setString(3, p.getEmail());
      pst.setString(4, p.getNumber());
      int i = pst.executeUpdate();
      if (i == 1) {
        f = true;
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return f;
  }

  public boolean deletePatient(int id) {
    boolean f = false;
    String delete = "delete from patient  where id=?";
    PreparedStatement pst = null;

    try {
      pst = con.prepareStatement(delete);
      pst.setInt(1, id);
      int i = pst.executeUpdate();
      if (i == 1) {
        f = true;
      }
    } catch (SQLException e) {
      e.printStackTrace();
    }
    return f;
  }
}




