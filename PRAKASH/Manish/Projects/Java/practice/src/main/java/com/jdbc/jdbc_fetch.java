package com.jdbc;

import java.sql.*;

public class jdbc_fetch {
    public static void main(String[] args) throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fetch_api", "root", "2020");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("select * from appointments where firstname = 'manish'");
            while (rs.next()) {
                System.out.println(rs.getInt(1) + " : " + rs.getString(2) + " : " + rs.getInt(3) + " : "
                        + rs.getString(4) + " : " + rs.getString(5) + " : " + rs.getString(6) + " : " + rs.getString(7)
                        + " : " + rs.getString(8) + " : " + rs.getString(9) + " : " + rs.getString(10) + " : "
                        + rs.getString(11) + " : " + rs.getString(12) + " : " + rs.getString(13));
            }
            con.close();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            System.out.println("Completed tasks");
        }
    }
}
