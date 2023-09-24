package com.backend.assignment14_backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {

    @Id
    int id;
    String fullname;
    String email;
    String username;
    String password;

    public String getFullname() {
        return this.fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", fullname='" + getFullname() + "'" +
                ", email='" + getEmail() + "'" +
                ", username='" + getUsername() + "'" +
                ", password='" + getPassword() + "'" +
                "}";
    }

}
