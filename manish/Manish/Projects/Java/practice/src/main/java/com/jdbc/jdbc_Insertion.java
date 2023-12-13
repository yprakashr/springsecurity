package com.jdbc;

import java.sql.*;

public class jdbc_Insertion {

    public static void main(String[] args) throws SQLException {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/phase3", "root", "0000");
            Statement stmt = con.createStatement();
            int i = stmt.executeUpdate("insert into products values(3,'black short skirt','skirt',1050,'active')");
            System.out.println("inserted " + i + " record into PRODUCTS");
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Completed tasks");
        }
    }
}
