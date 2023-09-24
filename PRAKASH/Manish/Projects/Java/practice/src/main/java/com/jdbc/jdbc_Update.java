package com.jdbc;

import java.sql.*;

public class jdbc_Update {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/phase3", "root", "0000");
            Statement stmt = con.createStatement();
            stmt.executeUpdate("update products set name='red boots' where id=1");
            ResultSet rs = stmt.executeQuery("select * from products");
            while (rs.next()) {
                System.out.println(rs.getString(1) + " : " + rs.getString(2) + " : " + rs.getString(3) + " : "
                        + rs.getString(4) + " : " + rs.getString(5));
            }
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Completed tasks");
        }
    }
}
