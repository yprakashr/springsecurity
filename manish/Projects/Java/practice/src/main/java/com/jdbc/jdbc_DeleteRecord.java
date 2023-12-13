package com.jdbc;

import java.sql.*;

public class jdbc_DeleteRecord {
    public static void main(String[] args) throws SQLException {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/phase3", "root", "0000");
            Statement stmt = con.createStatement();
            stmt.executeUpdate("delete from products where id=1");
            System.out.println("deleted record");
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Completed tasks");
        }
    }
}
