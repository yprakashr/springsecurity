package com.jdbc;

import java.sql.*;

public class jdbc_Create {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/phase3", "root", "0000");
            Statement st = con.createStatement();
            st.executeUpdate(
                    "create table returns(id integer, order_no varchar(50), product varchar(50), status varchar(50))");
            System.out.println("Created table RETURNS");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
