package com.jdbc;

import java.sql.*;

public class jdbc_like {
    public static void main(String[] args) throws SQLException {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/phase3", "root", "0000");
            Statement stmt1 = con.createStatement();
            Statement stmt2 = con.createStatement();
            Statement stmt3 = con.createStatement();
            Statement stmt4 = con.createStatement();
            Statement stmt5 = con.createStatement();
            Statement stmt6 = con.createStatement();

            // name starting with m
            ResultSet rs1 = stmt1.executeQuery("select * from users where name like 'm%'");
            // name ending with m
            ResultSet rs2 = stmt2.executeQuery("select * from users where name like '%m'");
            // name whose 3rd character is n
            ResultSet rs3 = stmt3.executeQuery("select * from users where name like '__n%'");
            // name starting with v and ending with m
            ResultSet rs4 = stmt4.executeQuery("select * from users where name like 'v%m'");
            // number whose 3rd char is 1 and 4th char is 2
            ResultSet rs5 = stmt5.executeQuery("select * from users where mobilenumber like '__12%'");
            // number containing 5,6 side by side
            ResultSet rs6 = stmt6.executeQuery("select * from users where mobilenumber like '%56%'");

            System.out.println("name starting with m");
            while (rs1.next()) {
                System.out.println(rs1.getString(1) + " : " + rs1.getString(2) + " : " + rs1.getString(3) + " : "
                        + rs1.getString(4) + " : " + rs1.getString(5));
            }
            System.out.println("----------------------------------------------------");

            System.out.println("name ending with m");
            while (rs2.next()) {
                System.out.println(rs2.getString(1) + " : " + rs2.getString(2) + " : " + rs2.getString(3) + " : "
                        + rs2.getString(4) + " : " + rs2.getString(5));
            }
            System.out.println("----------------------------------------------------");

            System.out.println("name whose 3rd character is n");
            while (rs3.next()) {
                System.out.println(rs3.getString(1) + " : " + rs3.getString(2) + " : " + rs3.getString(3) + " : "
                        + rs3.getString(4) + " : " + rs3.getString(5));
            }
            System.out.println("----------------------------------------------------");

            System.out.println("name starting with v and ending with m");
            while (rs4.next()) {
                System.out.println(rs4.getString(1) + " : " + rs4.getString(2) + " : " + rs4.getString(3) + " : "
                        + rs4.getString(4) + " : " + rs4.getString(5));
            }
            System.out.println("----------------------------------------------------");

            System.out.println("number whose 3rd char is 1 and 4th char is 2");
            while (rs5.next()) {
                System.out.println(rs5.getString(1) + " : " + rs5.getString(2) + " : " + rs5.getString(3) + " : "
                        + rs5.getString(4) + " : " + rs5.getString(5));
            }
            System.out.println("----------------------------------------------------");

            System.out.println("number containing 5,6 side by side");
            while (rs6.next()) {
                System.out.println(rs6.getString(1) + " : " + rs6.getString(2) + " : " + rs6.getString(3) + " : "
                        + rs6.getString(4) + " : " + rs6.getString(5));
            }
            System.out.println("----------------------------------------------------");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Completed tasks");
        }
    }
}
