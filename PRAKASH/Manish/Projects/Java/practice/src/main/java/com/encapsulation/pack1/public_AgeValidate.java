package com.encapsulation.pack1;

public class public_AgeValidate {
    public static void validate(int age) {
        if (age <= 18) {
            System.out.println("invalid age");
        } else {
            System.out.println("valid age");
        }
    }

    public static void main(String[] args) {

        // accessing in same class
        validate(20);

    }
}
